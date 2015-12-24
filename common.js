'use strict';

const http = require('http'),
      readline = require('readline');

exports.getInput = function(day) {
  const options = {
    host: 'adventofcode.com',
    path: `/day/${day}/input`
  };

  console.log(options);

  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.setPrompt('COOKIE> ');
  rl.prompt();

  return new Promise((resolve, reject) => {
    rl.on('line', (line) => {
      options.headers = {
        'Cookie': line.trim()
      };

      rl.close();

      const req = http.get(options, (response) => {
        let result = '';
        response.on('data', (data) => result += data);
        response.on('end', () => resolve(result));
      }).on('error', (error) => reject(error));
    });
  });
};
