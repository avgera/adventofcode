'use strict';

const common = require('./common');

function parseResult(result) {
  console.log(result);

}

common.getInput(5)
  .then((result) => parseResult(result))
  .catch((error) => console.error(error));
