const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { verifyVersion } = require('./stlc-release.cjs');

const files = {
  python: [
    'CHANGELOG.md',
    'pyproject.toml',
    'src/surge/_version.py',
    'uv.lock',
    '.release-please-manifest.json',
  ],
  ruby: [
    'CHANGELOG.md',
    'lib/surge_api/version.rb',
    'Gemfile.lock',
    'README.md',
    '.release-please-manifest.json',
  ],
  typescript: [
    'CHANGELOG.md',
    'package.json',
    'src/version.ts',
    'README.md',
    '.release-please-manifest.json',
  ],
};

function applyUpdates(candidate, sdk, root) {
  if (!Object.hasOwn(files, sdk)) throw new Error('Unknown SDK');
  const allowed = files[sdk];
  for (const update of candidate.updates) {
    // Ignore absent optional files from the language strategy. Any new file
    // must still be allowlisted; no workflow, source API, or dependency edits.
    const relative = update.path;
    if (
      relative !== path.posix.normalize(relative) ||
      path.isAbsolute(relative) ||
      relative === '.' ||
      relative === '..' ||
      relative.startsWith('../')
    ) {
      throw new Error('Unsafe release file path');
    }
    const target = path.join(root, relative);
    for (let part = target; part !== root; part = path.dirname(part)) {
      try {
        if (fs.lstatSync(part).isSymbolicLink()) throw new Error('Release file is a symlink');
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
    if (!fs.existsSync(target) && !update.createIfMissing) continue;
    if (!allowed.includes(relative)) throw new Error(`Unexpected release file: ${relative}`);
    const before = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : undefined;
    fs.writeFileSync(target, update.updater.updateContent(before));
  }
}

async function openVersionPR({ github, manifest, sdk, root, git, output = console.log }) {
  if (!Object.hasOwn(files, sdk)) throw new Error('Unknown SDK');
  const repository = { owner: 'surgeapi', repo: `${sdk}-sdk` };
  const open = await github.octokit.paginate(github.octokit.pulls.list, {
    ...repository,
    state: 'open',
    base: 'main',
    per_page: 100,
  });
  if (open.some((pr) => pr.labels.some((label) => label.name === 'autorelease: pending'))) {
    output('An open version PR already exists. Review it before preparing another release batch.');
    return;
  }
  const head = git('rev-parse', 'HEAD');
  const currentMain = async () =>
    (await github.octokit.repos.getBranch({ ...repository, branch: 'main' })).data.commit.sha;
  if (head !== (await currentMain())) throw new Error('Main changed; use a fresh release workflow run');
  if (git('status', '--porcelain', '--untracked-files=all'))
    throw new Error('Version preparation requires a clean checkout');
  const candidates = await manifest.buildPullRequests();
  if (!candidates.length) {
    output('No releasable SDK changes.');
    return;
  }
  if (candidates.length !== 1) throw new Error('Expected one root SDK release');
  const candidate = candidates[0];
  if (!/^release-please--branches--main(?:--components--[a-zA-Z0-9_@.-]+)?$/.test(candidate.headRefName)) {
    throw new Error('Unexpected version PR branch');
  }
  const branch = candidate.headRefName;
  const remote = `https://github.com/${repository.owner}/${repository.repo}.git`;
  const existing = git('ls-remote', '--heads', remote, `refs/heads/${branch}`);
  if (existing) {
    git('fetch', '--no-tags', remote, `refs/heads/${branch}:refs/remotes/version/previous`);
    // A closed, unmerged branch needs a human decision. Never replace it.
    git('merge-base', '--is-ancestor', 'refs/remotes/version/previous', head);
  }
  git('checkout', '-b', branch, head);
  applyUpdates(candidate, sdk, root);
  const version = JSON.parse(fs.readFileSync(path.join(root, '.release-please-manifest.json'), 'utf8'))['.'];
  verifyVersion(sdk, version, root);
  if (head !== (await currentMain()))
    throw new Error('Main changed while preparing versions; no branch pushed');
  git('add', '--', ...files[sdk].filter((file) => fs.existsSync(path.join(root, file))));
  if (!git('diff', '--cached', '--name-only')) throw new Error('Release candidate has no version changes');
  git('commit', '-m', candidate.title.toString());
  // Only this review branch, without tags or force. A concurrent branch writer
  // causes Git's normal non-fast-forward rejection.
  git('push', '--no-follow-tags', remote, `HEAD:refs/heads/${branch}`);
  const { data: pr } = await github.octokit.pulls.create({
    ...repository,
    base: 'main',
    head: branch,
    title: candidate.title.toString(),
    body: candidate.body.toString(),
  });
  await github.octokit.issues.addLabels({
    ...repository,
    issue_number: pr.number,
    labels: ['autorelease: pending'],
  });
  output(pr.html_url);
}

async function main() {
  const sdk = process.env.SDK;
  if (
    !Object.hasOwn(files, sdk) ||
    process.env.GITHUB_REPOSITORY !== `surgeapi/${sdk}-sdk` ||
    process.env.GITHUB_REF !== 'refs/heads/main' ||
    process.env.RELEASES_ENABLED !== 'true' ||
    !['push', 'workflow_dispatch'].includes(process.env.GITHUB_EVENT_NAME)
  ) {
    throw new Error('Version PR preparation is allowed only on approved production main');
  }
  // Read the library from the separately checked-out action and its exact lockfile.
  const toolRoot = path.resolve(process.env.RUNNER_TEMP, 'stlc-release-tool');
  if (fs.realpathSync(__dirname) !== fs.realpathSync(toolRoot))
    throw new Error('Run the adapter from the pinned tool directory');
  const { GitHub, Manifest, VERSION } = require('release-please');
  if (VERSION !== '17.3.0') throw new Error('Unexpected release-please version');
  const github = await GitHub.create({ owner: 'surgeapi', repo: `${sdk}-sdk`, token: process.env.GH_TOKEN });
  const manifest = await Manifest.fromManifest(
    github,
    'main',
    'release-please-config.json',
    '.release-please-manifest.json',
  );
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'stlc-version-git-'));
  const config = path.join(directory, 'config');
  fs.writeFileSync(config, '', { mode: 0o600 });
  const environment = {
    ...process.env,
    GIT_CONFIG_GLOBAL: config,
    GIT_CONFIG_NOSYSTEM: '1',
    GIT_TERMINAL_PROMPT: '0',
    GIT_AUTHOR_NAME: 'stlc-bot',
    GIT_AUTHOR_EMAIL: 'stlc-bot@users.noreply.github.com',
    GIT_COMMITTER_NAME: 'stlc-bot',
    GIT_COMMITTER_EMAIL: 'stlc-bot@users.noreply.github.com',
  };
  delete environment.GIT_CONFIG_COUNT;
  delete environment.GIT_CONFIG_PARAMETERS;
  const git = (...args) =>
    execFileSync(
      'git',
      [
        '-c',
        'core.hooksPath=/dev/null',
        '-c',
        'commit.gpgsign=false',
        '-c',
        'credential.helper=',
        '-c',
        'credential.https://github.com.helper=!gh auth git-credential',
        '-c',
        'http.https://github.com/.extraheader=',
        ...args,
      ],
      { env: environment, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
    ).trim();
  try {
    await openVersionPR({ github, manifest, sdk, root: process.cwd(), git });
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
}

module.exports = { openVersionPR, applyUpdates };
if (require.main === module)
  main().catch((error) => {
    const message = String(error.message).replaceAll(process.env.GH_TOKEN || '\0', '[REDACTED]');
    console.error(`::error::${message}`);
    process.exitCode = 1;
  });
