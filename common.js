'use strict';

const http = require('http'),
      readline = require('readline');

exports.getInput = function(day) {
  const options = {
    host: 'adventofcode.com',
    path: `/day/${day}/input`
  };

  console.log(options);

  function getCookie() {
    if (process.env.COOKIE) {
      return new Promise((resolve, reject) => {
        resolve(process.env.COOKIE);
      });
    }

    const rl = readline.createInterface(process.stdin, process.stdout);

    rl.setPrompt('COOKIE> ');
    rl.prompt();

    return new Promise((resolve, reject) => {
      rl.on('line', (line) => {
        resolve(line);
        rl.close();
      });
    });
  }

  return new Promise((resolve, reject) => {
    getCookie().then((line) => {
      options.headers = {
        'Cookie': line.trim()
      };

      const req = http.get(options, (response) => {
        let result = '';
        response.on('data', (data) => result += data);
        response.on('end', () => resolve(result));
      }).on('error', (error) => reject(error));
    });
  });
};
