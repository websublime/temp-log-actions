import { inspect } from 'node:util';

export function log(...args) {
  console.log(inspect(args, { showHidden: false, depth: null, colors: true }))
}
