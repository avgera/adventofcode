var common = require('./common');

function parseResult(result) {
  var north = '^', south = 'v', east = '>', west = '<',
      i, x = 0, y = 0, square = [], visited = [];

  function findHouse(house, n, m) {
    return house.x === n && house.y === m;
  }

  for (i = 0; i < result.length; i++) {
    square.push({ x: x, y: y });

    var visitedHouse = square.find(function(house) {
      return findHouse(house, x, y);
    });

    var visitedMore = visited.find(function(house) {
      return findHouse(house, x, y);
    });

    if (visitedHouse && !visitedMore) {
      visited.push(visitedHouse);
    }

    switch (result[i]) {
      case north:
        x++;
        break;
      case south:
        x--;
        break;
      case east:
        y++
        break;
      case west:
        y--;
        break;
    }
  }
  console.log('visisted houses', visited.length);
}

common.getInput(3, function(result){
  parseResult(result);
});
