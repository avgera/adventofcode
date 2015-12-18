var http = require('http');
var common = require('./common');

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

common.getInput(1, function(result) {
  parseResult(result);
});
