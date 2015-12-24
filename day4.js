'use strict';

const md5 = require('md5');

const secretKey = 'yzbqklnj';

function mine(start) {
  let i = 0;
  while (true) {
    let hash = md5(secretKey + i);

    if (hash.substring(0, start.length) === start) {
      console.log(i, hash);
      return;
    }
    i++;
  }
}

mine('00000');
mine('000000');
