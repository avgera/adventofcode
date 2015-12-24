'use strict';

const common = require('./common');

const north = '^',
      south = 'v',
      east = '>',
      west = '<';

function handleVisitedHouse(square, visited, coords) {
  function findHouse(house) {
    return house.x === coords.x && house.y === coords.y;
  }

  square.push(Object.assign({}, coords));

  const visitedHouse = square.find(findHouse);
  const visitedMore = visited.find(findHouse);

  if (visitedHouse && !visitedMore) {
    visited.push(visitedHouse);
  }
}

function parseResult(result) {
  const square = [], visited = [];
  let coords = { x: 0, y: 0 };;

  handleVisitedHouse(square, visited, coords);

  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case north:
        coords.x++;
        break;
      case south:
        coords.x--;
        break;
      case east:
        coords.y++
        break;
      case west:
        coords.y--;
        break;
    }
    handleVisitedHouse(square, visited, coords);
  }
  console.log('visisted houses', visited.length);
}

function parseResultWithRoboSanta(result) {
  const square = [], visited = [];
  let santaCoords = { x: 0, y: 0 },
      roboSantaCoords = { x: 0, y: 0 };

  handleVisitedHouse(square, visited, santaCoords);
  handleVisitedHouse(square, visited, roboSantaCoords);

  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case north:
        if (i % 2 === 0) {
          santaCoords.x++;
        } else {
          roboSantaCoords.x++;
        }
        break;
      case south:
        if (i % 2 === 0) {
          santaCoords.x--;
        } else {
          roboSantaCoords.x--;
        }
        break;
      case east:
        if (i % 2 === 0) {
          santaCoords.y++;
        } else {
          roboSantaCoords.y++;
        }
        break;
      case west:
        if (i % 2 === 0) {
          santaCoords.y--;
        } else {
          roboSantaCoords.y--;
        }
        break;
    }

    handleVisitedHouse(square, visited, santaCoords);
    handleVisitedHouse(square, visited, roboSantaCoords);
  }
  console.log('visisted houses', visited.length);
}

common.getInput(3)
  .then((result) => {
    parseResult(result);
    parseResultWithRoboSanta(result);
  })
  .catch((error) => console.error(error));
