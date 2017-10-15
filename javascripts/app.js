// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

console.log(rover.direction);

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("Rover direction: " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("Rover direction: " + rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      if (rover.y > 0) {
        rover.y -= 1;
      } else {
        alert("Don't get out of the grid!");
      }
      break;
    case "S":
      if (rover.y < 10) {
        rover.y += 1;
      } else {
        alert("Don't get out of the grid!");
      }
      break;
    case "E":
      if (rover.x < 10) {
        rover.x += 1;
      } else {
        alert("Don't get out of the grid!");
      }
      break;
    case "W":
      if (rover.x > 0) {
        rover.x -= 1;
      } else {
        alert("Don't get out of the grid!");
      }
      break;
  }
  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
  console.log("Rover position: (" + rover.x + "," + rover.y + ")");
}

function moveBackward(rover){
  switch (rover.direction) {
    case "N":
      if (rover.y < 10) {
        rover.y += 1;
      } else {
        alert("Don't get out of the grid!");
      }
      break;
    case "S":
      if (rover.y > 0) {
        rover.y -= 1;
      } else {
        alert("Don't get out of the grid!");
      }
      break;
    case "E":
      if (rover.x > 0) {
        rover.x -= 1;
      } else {
        alert("Don't get out of the grid!");
      }
      break;
    case "W":
      if (rover.x < 10) {
        rover.x += 1;
      } else {
        alert("Don't get out of the grid!");
      }
      break;
  }
  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
}

function commands(instructions) {
  for (var i = 0; i < instructions.length; i++) {
    var singleInstruction = instructions[i];
    if (singleInstruction === "f") {
      moveForward(rover);
    } else if (singleInstruction === "b") {
      moveBackward(rover);
    } else if (singleInstruction === "r") {
      turnRight(rover);
    } else if (singleInstruction === "l") {
      turnLeft(rover);
    } else {
      continue;
    }
  }
  console.log("The rover has been in " + rover.travelLog);
}
