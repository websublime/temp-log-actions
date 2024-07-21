import { initChanges, addChange, Bump } from '@websublime/workspace-tools';

//initChanges(process.cwd());
addChange({ deploy: [], package: '@scope/package-a', releaseAs: Bump.Patch }, process.cwd());
