function montecarlo(pairs, senarios, precision) {
  if (typeof senarios !== 'number') {
    throw 'You must provide a number of scenarios (example: 5000)';
  }

  if (typeof precision !== 'number') {
    throw 'You must provide a precision (example: 10)';
  }

  function addRandom(memo, pair) {
    if (typeof pair[0] !== 'number' || typeof pair[1] !== 'number') {
      return memo;
    }

    var min = Math.min.apply(null, pair);
    var max = Math.max.apply(null, pair);
    var rand = Math.random() * (max - min) + min;
    return memo + rand;
  }

  var forecast = [];
  for (i = 0; i < senarios; i++) {
    var result = pairs.reduce(addRandom, 0);
    result = parseFloat(result.toPrecision(precision));
    forecast.push(result);
  };

  return forecast;
}

function groupedFrequency(forecast, count) {
  var min = Math.floor(Math.min.apply(null, forecast));
  var max = Math.ceil(Math.max.apply(null, forecast));
  var classWidth = Math.ceil((max - min) / count);

  function makeBin(x) {
    var valuesInRange = forecast.filter(function (value) {
      return value >= x && value < (x + classWidth);
    });

    return [x, valuesInRange.length / forecast.length];
  }

  var bins = [makeBin(min)];
  for (i = 1; i < count; i++) {
    var prev = bins[bins.length - 1][0];
    bins.push(makeBin(prev + classWidth));
  }

  return bins;
}
