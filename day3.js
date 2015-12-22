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
    console.log('visited house', visited);
  }
}

function parseResult(result) {
  const square = [], visited = [];
  let coords = { x: 0, y: 0 };;

  for (let i = 0; i < result.length; i++) {
    handleVisitedHouse(square, visited, coords);

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
  }
  console.log('visisted houses', visited.length);
}

function parseResultWithRoboSanta(result) {
  const square = [], visited = [];
  let coords = { x: 0, y: 0 };;

  for (let i = 0; i < result.length; i++) {
    handleVisitedHouse(square, visited, coords);

    switch (result[i]) {
      case north:
        if (i % 2 === 0) {
          coords.x++;
          console.log('Santa');
        } else {
          coords.x--;
          console.log('Robo-Santa');
        }
        break;
      case south:
        if (i % 2 === 0) {
          coords.x--;
          console.log('Santa');
        } else {
          coords.x++;
          console.log('Robo-Santa');
        }
        break;
      case east:
        if (i % 2 === 0) {
          coords.y++;
          console.log('Santa');
        } else {
          coords.y--;
          console.log('Robo-Santa');
        }
        break;
      case west:
        if (i % 2 === 0) {
          coords.y--;
          console.log('Santa');
        } else {
          coords.y++;
          console.log('Robo-Santa');
        }
        break;
    }
    console.log(coords);
  }
  console.log('visisted houses', visited.length + 1);
}

common.getInput(3)
  .then((result) => {
    //parseResult(result);
    parseResultWithRoboSanta('^v');
    parseResultWithRoboSanta('^>v<');
    parseResultWithRoboSanta('^v^v^v^v^v');
    //parseResultWithRoboSanta(result);
  })
  .catch((error) => console.error(error));
