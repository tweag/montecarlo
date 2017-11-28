const fs = require('fs');

/**
 * Who needs modules anyway?
 */
eval(fs.readFileSync('./index.js').toString());

test('it works', () => {
  montecarlo();
});
