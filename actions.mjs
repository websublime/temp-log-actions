import {
  getProjectRootPath,
  getChange,
  removeChange,
  getChangedPackages,
} from "@websublime/workspace-tools";
import { inspect } from "node:util";

function log(...args) {
  console.log(inspect(args, { showHidden: false, depth: null, colors: true }));
}

export function getActionInfo({ context, root, branch, repoName }) {
  let projectRoot = getProjectRootPath(root);
  let ref = context?.ref ?? context?.payload?.ref;
  let headRef = context?.payload?.pull_request?.head?.ref;
  let isMerge = Boolean(context?.payload?.pull_request?.merged);

  if (isMerge && headRef) {
    removeChange(headRef, projectRoot);
  }

  let change = getChange(branch.replace("refs/heads/", ""), projectRoot);
  let packages = getChangedPackages("origin/main", projectRoot);

  return {
    branch,
    change,
    packages,
    projectRoot,
    commitIdBefore: context?.payload?.before,
    commitIdAfter: context?.payload?.after,
    ref,
    eventName: context?.eventName,
    headRef,
    isMerge,
    repoName,
  };
}
