'use strict';

const http = require('http'),
      readline = require('readline'),
      rl = readline.createInterface(process.stdin, process.stdout);

// import http from 'http';
// import readline from 'readline';
//
// const rl = readline.createInterface(process.stdin, process.stdout);

module.exports = {
  getInput: function(day) {
    const options = {
      host: 'adventofcode.com',
      path: `/day/${day}/input`
    };

    console.log(options);

    rl.setPrompt('COOKIE> ');
    rl.prompt();

    return new Promise((resolve, reject) => {
      rl.on('line', (line) => {
        let req;
        options.headers = {
          'Cookie': line.trim()
        };

        rl.close();

        req = http.get(options, (response) => {
          let result = '';
          response.on('data', (data) => result += data);
          response.on('end', () => resolve(result));
        });

        req.on('error', (error) => reject(error));
      });
    });
  },
};
