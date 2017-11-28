function montecarlo(pairs, senarios, precision) {
  if (typeof senarios !== 'number') {
    throw 'You must provide a number of scenarios (example: 5000)';
  }

  if (typeof precision !== 'number') {
    throw 'You must provide a precision (example: 10)';
  }

  var results = [];
  for (i = 0; i < senarios; i++) {
    var result = runScenario(pairs);
    result = parseFloat(result.toPrecision(precision));
    results.push(result);
  };

  return results;
}

function runScenario(pairs) {
  return pairs.reduce(function(memo, pair) {
    if (typeof pair[0] !== 'number' || typeof pair[1] !== 'number') {
      return memo;
    }

    return memo + getRandomBetween(pair[0], pair[1]);
  }, 0);
}

function getRandomBetween(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  return Math.random() * (max - min) + min;
}

function getSignificand(n) {
  // remove decimal and make positive
  var value = Math.abs(String(n).replace(".", ""));

  if (value === 0) {
    return 0;
  }

  // kill the 0s at the end of n
  while (n !== 0 && n % 10 === 0) {
    n /= 10;
  }

  // get number of digits
  return Math.floor(Math.log(n) / Math.log(10)) + 1;
}
