'use strict';

const http = require('http'),
      common = require('./common');

function parseResult(result) {
  const lines = result.split('\n');

  let paperSum = 0, ribbonSum = 0, l, w, h;

  function calculatePaperSquare() {
    const lw = l*w, wh = w*h, hl = h*l;

    const slack = Math.min(lw, wh, hl);
    const res = 2*lw + 2*wh + 2*hl + slack;
    console.log(l, w, h, slack, res);
    if (res) {
      paperSum += res;
    }
  }

  function calculateRibbon() {
    const lw = l*2 + w*2, wh = w*2 + h*2, hl = h*2 + l*2;
    const res = Math.min(lw, wh, hl) + l * w * h;
    if (res) {
      ribbonSum += res;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].split('x');
    l = +line[0];
    w = +line[1];
    h = +line[2];
    calculatePaperSquare();
    calculateRibbon();
  };
  console.log(paperSum);
  console.log(ribbonSum);
}

common.getInput(2)
  .then((result) => parseResult(result))
  .catch((error) => console.error(error));
