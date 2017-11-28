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

/**
 * T-Shirt sizes that we use for estimates
 */
const XS = [.25, .5];
const S  = [.5, 1];
const M  = [1, 3];
const L  = [3, 5];
const XL = [5, 10];

/**
 * An example estimate
 */
const ESTIMATE = [M, L, M, M, L, XL, M, XL, L, M, M, L, M, M, L, S, M, M];

describe('montecarlo', () => {
  test('generates a distribution', () => {
    expect(montecarlo(ESTIMATE, 25, 10)).toMatchSnapshot();
  });

  test('generates the correct number of results', () => {
    expect(montecarlo(ESTIMATE, 25, 10)).toHaveLength(25);
  });
});

describe('groupedFrequency', () => {
  const data = [5, 6, 7, 7, 8, 8, 9, 10, 13];

  test('can allocate 2 bins', () => {
    expect(groupedFrequency(data, 2)).toMatchSnapshot();
  });

  test('can allocate 3 bins', () => {
    expect(groupedFrequency(data, 3)).toMatchSnapshot();
  });

  test('can allocate 4 bins', () => {
    expect(groupedFrequency(data, 4)).toMatchSnapshot();
  });

  test('can allocate 5 bins', () => {
    expect(groupedFrequency(data, 5)).toMatchSnapshot();
  });
});
