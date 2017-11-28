function montecarlo(input, senarios, precision) {
  if (typeof senarios !== 'number') {
    throw 'You must provide a number of scenarios (example: 5000)';
  }

  if (typeof precision !== 'number') {
    throw 'You must provide a precision (example: 10)';
  }

  var results = [];
  for (i = 0; i < senarios; i++) {
    result = pass(input);
    result = parseFloat(result.toPrecision(precision));
    results.push(result);
  };

  return results;
}

function pass(pairs) {
  return pairs.reduce(function(memo, pair) {
    if(typeof pair[0] != 'number' || typeof pair[1] != 'number') {
      return memo;
    }

    return memo + getRandomBetween(pair[0], pair[1]);
  }, 0);
}

function getRandomBetween(a, b) {
  min = Math.min(a,b);
  max = Math.max(a,b);
  return Math.random() * (max - min) + min;
}

var log10 = Math.log(10);
function getSignificand(n) {
  n = Math.abs(String(n).replace(".", "")); //remove decimal and make positive
  if (n === 0) return 0;
  while (n != 0 && n % 10 == 0) n /= 10; //kill the 0s at the end of n
  return Math.floor(Math.log(n) / log10) + 1; //get number of digits
}

