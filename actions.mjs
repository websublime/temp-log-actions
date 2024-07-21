import { getProjectRootPath, getChange, getChanges } from '@websublime/workspace-tools';
import { inspect } from 'node:util';

function log(...args) {
  console.log(inspect(args, { showHidden: false, depth: null, colors: true }))
}

export function getActionInfo({ context, root, branch }) {
  let projectRoot = getProjectRootPath(root);
  let ref = context?.ref ?? context?.payload?.ref;
  let change = getChange(branch.replace('refs/heads/', ''), projectRoot);
  let changes = getChanges(projectRoot);

  return {
    branch,
    change,
    changes,
    projectRoot,
    commitIdBefore: context?.payload?.before,
    commitIdAfter: context?.payload?.after,
    ref,
    eventName: context?.eventName,
    headRef: context?.payload?.pull_request?.head?.ref,
    isMerge: Boolean(context?.payload?.pull_request?.merged),
  }
}
