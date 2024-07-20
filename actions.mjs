import { getProjectRootPath } from '@websublime/workspace-tools';
import { inspect } from 'node:util';

function log(...args) {
  console.log(inspect(args, { showHidden: false, depth: null, colors: true }))
}

export function getActionInfo({ context, root }) {
  let projectRoot = getProjectRootPath(root);

  return {
    projectRoot,
    commitIdBefore: context?.payload?.before,
    commitIdAfter: context?.payload?.after,
    ref: context?.payload?.ref,
    eventName: context?.eventName,
    headRef: context?.payload?.pull_request?.head?.ref,
  }
}
