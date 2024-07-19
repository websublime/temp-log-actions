import { inspect } from 'node:util';

export function logging({ github, context, core }) {
  console.log(inspect({ github, context, core }, { showHidden: false, depth: null, colors: true }))
}
