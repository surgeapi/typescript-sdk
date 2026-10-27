const fs = require('node:fs');
const path = require('node:path');

const repositories = new Set(['surgeapi/python-sdk', 'surgeapi/ruby-sdk', 'surgeapi/typescript-sdk']);

async function resolveRelease({ github, context, core, expectedRepository, enabled }) {
  const actual = `${context.repo.owner}/${context.repo.repo}`;
  if (!repositories.has(expectedRepository) || actual !== expectedRepository || enabled !== 'true') {
    throw new Error('Package release is not enabled for this production repository');
  }
  let tag;
  if (context.eventName === 'release' && context.payload.action === 'published') {
    tag = context.payload.release.tag_name;
  } else if (
    context.eventName === 'workflow_dispatch' &&
    context.ref === 'refs/heads/main' &&
    context.payload.inputs.confirmation === 'republish-reviewed-release'
  ) {
    tag = context.payload.inputs.release_tag;
  } else {
    throw new Error('Use a published release event or confirmed manual recovery from main');
  }
  if (!/^v\d+\.\d+\.\d+$/.test(tag || '')) throw new Error('Expected a stable vMAJOR.MINOR.PATCH tag');
  const { data: release } = await github.rest.repos.getReleaseByTag({ ...context.repo, tag });
  if (
    release.draft ||
    release.prerelease ||
    release.tag_name !== tag ||
    !release.published_at ||
    (context.eventName === 'release' && release.id !== context.payload.release.id)
  ) {
    throw new Error('The selected tag must have an existing published stable GitHub release');
  }
  const { data: ref } = await github.rest.git.getRef({ ...context.repo, ref: `tags/${tag}` });
  let object = ref.object;
  for (let depth = 0; object.type === 'tag' && depth < 5; depth++) {
    const { data: annotated } = await github.rest.git.getTag({ ...context.repo, tag_sha: object.sha });
    object = annotated.object;
  }
  if (object.type !== 'commit' || !/^[a-f0-9]{40}$/.test(object.sha)) {
    throw new Error('The release tag must resolve to a commit');
  }
  core.setOutput('commit', object.sha);
  core.setOutput('version', tag.slice(1));
  core.setOutput('tag', tag);
}

function verifyVersion(sdk, version, root = '.') {
  if (!/^\d+\.\d+\.\d+$/.test(version || '')) throw new Error('Invalid release version');
  const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
  const manifest = JSON.parse(read('.release-please-manifest.json'));
  const versions = [manifest['.']];
  if (sdk === 'python') {
    const project =
      read('pyproject.toml')
        .split(/^\[project\]\s*$/m)[1]
        ?.split(/^\[/m)[0] || '';
    versions.push(project.match(/^version\s*=\s*"([^"]+)"/m)?.[1]);
    versions.push(read('src/surge/_version.py').match(/^__version__\s*=\s*"([^"]+)"/m)?.[1]);
    const locked = read('uv.lock')
      .split(/^\[\[package\]\]\s*$/m)
      .filter((block) => /^name = "surge-sdk"$/m.test(block));
    if (locked.length !== 1) throw new Error('Expected one surge-sdk entry in uv.lock');
    versions.push(locked[0].match(/^version = "([^"]+)"/m)?.[1]);
  } else if (sdk === 'ruby') {
    versions.push(read('lib/surge_api/version.rb').match(/^\s*VERSION = "([^"]+)"/m)?.[1]);
    versions.push(read('Gemfile.lock').match(/^    surge_api \(([^)]+)\)/m)?.[1]);
  } else if (sdk === 'typescript') {
    versions.push(JSON.parse(read('package.json')).version);
    versions.push(read('src/version.ts').match(/export const VERSION = ['"]([^'"]+)['"]/)?.[1]);
  } else {
    throw new Error('Unknown SDK');
  }
  if (versions.some((value) => value !== version)) {
    throw new Error('Release tag, manifest, package, runtime, and lockfile versions must agree');
  }
}

module.exports = { resolveRelease, verifyVersion };
if (require.main === module) verifyVersion(process.argv[2], process.env.RELEASE_VERSION);
