class makeCharacter {
  constructor(charX, charY, moveSpeed, charSize) {}
  draw() {
    circle(charX, charY, charSize);
  }
  movement() {
    if (keyIsDown(87) === true) {
      charY -= moveSpeed;
    }
    if (keyIsDown(65) === true) {
      charX -= moveSpeed;
    }
    if (keyIsDown(83) === true) {
      charY += moveSpeed;
    }
    if (keyIsDown(68) === true) {
      charX += moveSpeed;
    }
  }
}

moveSpeed = 5;
charSize = 25;
charX = 100;
charY = 100;
