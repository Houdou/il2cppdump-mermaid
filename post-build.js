// Hacky patch from commonjs to module

import * as fs from 'fs';

const m = process.argv[2];

const parser = fs.readFileSync(`./${m}.js`, 'utf8');
const lines = parser.split('\n');

lines.splice(0, 8);
lines.splice(lines.length - 5, 5)

fs.writeFileSync(`./${m}.js`, lines.join('\n') + `
export {
  peg$SyntaxError as SyntaxError,
  peg$parse as parse,
}
`, 'utf8');
