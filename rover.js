const roverMars = {
  direction: "N",
  x: 0,
  y: 0,
  path: [{ x: 0, y: 0 }]
}; 

const roverMars2 = {
  direction: "S",
  x: 0,
  y: 0,
  path: [{ x: 0, y: 0 }]
};

const rock = [
  [4, 4],
  [7, 7]
]

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Rover is now facing West");
      break;
    case "W":
      rover.direction = "S";
      console.log("Rover is now facing South");
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover is now facing East");
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover is now facing North");
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is now facing East");
      break;
    case "E":
      rover.direction = "S";
      console.log("Rover is now facing South");
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover is now facing West");
      break;
    case "W":
      rover.direction = "N";
      console.log("Rover is now facing North");
      break;
  }
}

function moveForward(rover) {
  console.log("moveForward was called");
  switch (rover.direction) {
    case "W":
      rover.x -= 1;
      if (rover.x < 0) {
        rover.x += 1;
        console.log("You can't place player outside of the board!");
      } else if ((rock[0][0] === rover.x && rover.y === rock[0][1]) || (rock[1][0] === rover.x && rover.y === [1][1]) ) {
        rover.x += 1;
        console.log("Obstacle! Turn around!");
      } else {
        console.log(rover.x, rover.y);
      }
      break;
    case "N":
      rover.y -= 1;
      if (rover.y < 0) {
        rover.y += 1;
        console.log("You can't place player outside of the board!");
      } else if ((rock[0][0] === rover.x && rover.y === rock[0][1]) || (rock[1][0] === rover.x && rover.y === [1][1]) ) {
        rover.x += 1;
        console.log("Obstacle! Turn around!");
      } else {
        console.log(rover.x, rover.y);
      }
      break;
    case "S":
      rover.y += 1;
      if (rover.y > 9) {
        rover.y -= 1;
        console.log("You can't place player outside of the board!");
      } else if ((rock[0][0] === rover.x && rover.y === rock[0][1]) || (rock[1][0] === rover.x && rover.y === [1][1]) ) {
        rover.x -= 1;
        console.log("Obstacle! Turn around!");
      } else {
        console.log(rover.x, rover.y);
      }
      break;
    case "E":
      rover.x += 1;
      if (rover.x > 9) {
        rover.x -= 1;
        console.log("You can't place player outside of the board!");
      } else if ((rock[0][0] === rover.x && rover.y === rock[0][1]) || (rock[1][0] === rover.x && rover.y === [1][1]) ) {
        rover.x -= 1;
        console.log("Obstacle! Turn around!");
      } else {
        console.log(rover.x, rover.y);
      }
      break;
  }
  let travelLog = { x: rover.x, y: rover.y };
  rover.path.push(travelLog);
}

function moveBackward(rover) {
  console.log("moveBackward was called");
  switch (rover.direction) {
    case "W":
      rover.x += 1;
      if (rover.x > 9) {
        rover.x -= 1;
        console.log("You can't place player outside of the board!");
      } else if ((rock[0][0] === rover.x && rover.y === rock[0][1]) || (rock[1][0] === rover.x && rover.y === [1][1]) ) {
        rover.x -= 1;
        console.log("Obstacle! Turn around!");
      } else {
        console.log(rover.x, rover.y);
      }
      break;
    case "N":
      rover.y += 1;
      if (rover.y > 9) {
        rover.y -= 1;
        console.log("You can't place player outside of the board!");
      } else if ((rock[0][0] === rover.x && rover.y === rock[0][1]) || (rock[1][0] === rover.x && rover.y === [1][1]) ) {
        rover.x -= 1;
        console.log("Obstacle! Turn around!");
      } else {
        console.log(rover.x, rover.y);
      }
      break;
    case "S":
      rover.y -= 1;
      if (rover.y < 0) {
        rover.y += 1;
        console.log("You can't place player outside of the board!");
      } else if ((rock[0][0] === rover.x && rover.y === rock[0][1]) || (rock[1][0] === rover.x && rover.y === [1][1]) ) {
        rover.x += 1;
        console.log("Obstacle! Turn around!");
      } else {
        console.log(rover.x, rover.y);
      }
      break;
    case "E":
      rover.x -= 1;
      if (rover.x > 0) {
        rover.x += 1;
        console.log("You can't place player outside of the board!");
      } else if ((rock[0][0] === rover.x && rover.y === rock[0][1]) || (rock[1][0] === rover.x && rover.y === [1][1]) ) {
        rover.x += 1;
        console.log("Obstacle! Turn around!");
      } else {
        console.log(rover.x, rover.y);
      }
      break;
  }
  let travelLog = { x: rover.x, y: rover.y };
  rover.path.push(travelLog);
}

function command(rover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    switch (order) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      default:
        console.log("Please provide valid order.");
    }
  }
  console.log(rover.path);
}

command(roverMars, "rfffr");
command(roverMars2, "lffffl");
