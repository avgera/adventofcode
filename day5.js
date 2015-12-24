'use strict';

const common = require('./common');

function parseResult(result) {
  console.log(result);
  const lines = result.split('\n');

  const re1 = /([aeiou])/ig;
  const re2 = /([A-Za-z])\1/ig;
  const re3 = /ab|cd|pq|xy/ig;

  let matched = 0;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    // console.log('vovels', line.match(re1));
    // console.log('doubles', line.match(re2));
    // console.log('exclude', line.match(re3));
    let vovels = line.match(re1),
        doubles = line.match(re2),
        exclude = line.match(re3);
    if (vovels && vovels.length >= 3 && doubles && !exclude) {
      console.log('matched', line);
      matched++;
    }
  }
  console.log(matched);
}

common.getInput(5)
  .then((result) => {
    // parseResult('aeiouaeiouaeiou\nugknbfddgicrmopn\naaa\njchzalrnumimnmhp\nhaegwjzuvuyypxyu\ndvszwmarrgswjxmb');
    parseResult(result);
  })
  .catch((error) => console.error(error));
