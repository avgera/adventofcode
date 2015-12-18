var http = require('http'),
    readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

module.exports = {
  getInput: function(day, callback) {
    var options = {
      host: 'adventofcode.com',
      path: '/day/' + day + '/input'
    };

    rl.setPrompt('COOKIE> ');
    rl.prompt();
    rl.on('line', function(line) {
      var req;
      options.headers = {
        'Cookie': line.trim()
      };

      rl.close();

      req = http.get(options, function(response) {
        var result = '';
        response.on('data', function(data) {
          result += data;
        });
        response.on('end', function () {
          callback(result);
        });
      });

      req.on('error', function (error) {
        console.error(error);
      });
    });
  },
};
