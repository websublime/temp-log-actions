export function logging({ github, context, core }) {
  const util = require('util');

  console.log(util.inspect({ github, context, core }, { showHidden: false, depth: null, colors: true }))
}
