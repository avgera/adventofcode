var http = require('http');
var common = require('./common');

common.options.path = '/day/1/input';

function parseResult(result) {
  var floor = 0, firstGroundIndex = 0;
  console.log(result.length);
  for (i = 0; i < result.length; i++) {
    if (result[i] === '(') {
      floor++;
    } else {
      floor--;
    }
    if (firstGroundIndex === 0 && floor === -1) {
      firstGroundIndex = i + 1;
    }
  }
  console.log(floor);
  console.log(firstGroundIndex);
}

var r = http.get(common.options, function(response) {
  var result = '';

  response.on('data', function(data) {
    result += data;
  });

  response.on('end', function () {
    parseResult(result);
  });
});

r.on('error', function (error) {
  console.error('error', error);
});
