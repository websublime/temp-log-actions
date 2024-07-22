import {
  getChangedPackages,
  addChange,
  Bump,
} from "@websublime/workspace-tools";
import { log } from "./test.mjs";

addChange(
  { deploy: ["int"], package: "@scope/package-a", releaseAs: Bump.Minor },
  process.cwd(),
);
log(getChangedPackages("main", process.cwd()));
