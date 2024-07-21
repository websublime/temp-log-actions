import { getChangedPackages, getPackages } from '@websublime/workspace-tools';
import { log } from './test.mjs';

log(getChangedPackages('main', process.cwd()));
log(getPackages(process.cwd()));
