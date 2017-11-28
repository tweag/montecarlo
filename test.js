const fs = require('fs');

/**
 * Who needs modules anyway?
 */
eval(fs.readFileSync('./index.js').toString());

const XS = [.25, .5];
const S  = [.5, 1];
const M  = [1, 3];
const L  = [3, 5];
const XL = [5, 10];

test('it works', () => {
  const dataset = [
    M,
    L,
    M,
    M,
    L,
    XL,
    M,
    XL,
    L,
    M,
    M,
    L,
    M,
    M,
    L,
    S,
    M,
    M
  ];

  montecarlo(dataset, 5000, 10);
});
