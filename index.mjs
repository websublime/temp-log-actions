import { getChangedPackages } from '@websublime/workspace-tools';
import { log } from './test.mjs';

log(getChangedPackages('main', process.cwd()));
