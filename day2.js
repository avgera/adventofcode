var http = require('http');
var common = require('./common');

common.options.path = '/day/2/input';
console.log(common.options);

function parseResult(result) {
  var lines = result.split('\n'),
      paperSum = 0, ribbonSum = 0, l, w, h, i, line;

  function calculatePaperSquare() {
    var lw = l*w, wh = w*h, hl = h*l, slack, res;

    slack = Math.min(lw, wh, hl);
    res = 2*lw + 2*wh + 2*hl + slack;
    console.log(l, w, h, slack, res);
    if (res) {
      paperSum += res;
    }
  }

  function calculateRibbon() {
    var lw = l*2 + w*2, wh = w*2 + h*2, hl = h*2 + l*2, res;
    res = Math.min(lw, wh, hl) + l * w * h;
    if (res) {
      ribbonSum += res;
    }
  }

  for (i = 0; i < lines.length; i++) {
    line = lines[i].split('x');
    l = +line[0];
    w = +line[1];
    h = +line[2];
    calculatePaperSquare();
    calculateRibbon();
  };
  console.log(paperSum);
  console.log(ribbonSum);
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
  console.error(error);
});
