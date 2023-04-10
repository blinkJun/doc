export function createGitHubUrl(
  docsRepo,
  docsDir,
  docsBranch,
  path,
  folder = 'docs/examples/',
  ext = '.vue'
) {
  return `${docsRepo}/blob/${docsBranch}/${folder || ''}${path}${ext || ''}`;
}
