const fs = require('fs');

/**
 * Stub out Math.random, because it's hard to test.
 */
global.Math.random = (() => {
  let i = 0;
  return () => ((i++) % 10) / 10;
})();

/**
 * Who needs modules anyway?
 */
eval(fs.readFileSync('./index.js').toString());

const XS = [.25, .5];
const S  = [.5, 1];
const M  = [1, 3];
const L  = [3, 5];
const XL = [5, 10];

const dataset = [
  M, L, M, M, L, XL, M, XL, L, M,
  M, L, M, M, L, S, M, M
];

test('generates a distribution', () => {
  expect(montecarlo(dataset, 25, 10)).toMatchSnapshot();
});

test('generates the correct number of results', () => {
  expect(montecarlo(dataset, 25, 10)).toHaveLength(25);
});
