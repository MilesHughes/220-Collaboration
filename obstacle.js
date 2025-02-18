class obstacle {
  constructor(x, y, XMoveSpeed, YMoveSpeed) {
    this.x = x;
    this.y = y;
    this.XMoveSpeed = XMoveSpeed;
    this.YMoveSpeed = YMoveSpeed;
    this.frame = 0;
  }
  drawAnimation() {
    if (this.frame < 121 && timerValue == 10) this.frame++;
    else this.frame = 0;
  }
  obstacleMovement() {
    image(images[this.frame], this.x, this.y, obstacleSize, obstacleSize);
    this.x += this.XMoveSpeed;
    this.y += this.YMoveSpeed;
    if (this.x >= canvasX - obstacleSize) {
      this.XMoveSpeed = random(
        obstacleMaxNegativeSpeed,
        obstacleMaxPositiveSpeed
      );
      this.YMoveSpeed = random(
        obstacleMaxNegativeSpeed,
        obstacleMaxPositiveSpeed
      );
      this.XMoveSpeed = this.XMoveSpeed * -1;
    }
    if (this.y >= canvasY - obstacleSize) {
      this.XMoveSpeed = random(
        obstacleMaxNegativeSpeed,
        obstacleMaxPositiveSpeed
      );
      this.YMoveSpeed = random(
        obstacleMaxNegativeSpeed,
        obstacleMaxPositiveSpeed
      );
      this.YMoveSpeed = this.YMoveSpeed * -1;
    }
    if (this.x <= 1) {
      this.XMoveSpeed = this.XMoveSpeed * -1;
      this.XMoveSpeed = random(
        obstacleMaxNegativeSpeed,
        obstacleMaxPositiveSpeed
      );
      this.YMoveSpeed = random(
        obstacleMaxNegativeSpeed,
        obstacleMaxPositiveSpeed
      );
    }
    if (this.y <= 1) {
      this.YMoveSpeed = this.YMoveSpeed * -1;
      this.XMoveSpeed = random(
        obstacleMaxNegativeSpeed,
        obstacleMaxPositiveSpeed
      );
      this.YMoveSpeed = random(
        obstacleMaxNegativeSpeed,
        obstacleMaxPositiveSpeed
      );
    }
  }
  obstacleCollision() {
    if (charX >= this.x) {
      if (charX <= this.x + obstacleSize) {
        if (charY >= this.y) {
          if (charY <= this.y + obstacleSize) {
            remove();
          }
        }
      }
    }
  }
}

obstacleSize = 100;

obstacleMaxPositiveSpeed = 20;
obstacleMaxNegativeSpeed = -20;

function obstacleSetup() {
  for (var i = 0; i < obstacleCount; i++) {
    obstacleX = random(1, canvasX);
    obstacleY = random(1, canvasY);
    obstacleXMoveSpeed = random(
      obstacleMaxNegativeSpeed,
      obstacleMaxPositiveSpeed
    );
    obstacleYMoveSpeed = random(
      obstacleMaxNegativeSpeed,
      obstacleMaxPositiveSpeed
    );
    obstacles.push(
      new obstacle(obstacleX, obstacleY, obstacleXMoveSpeed, obstacleYMoveSpeed)
    );
  }
}

var images = [];

function loadAnimation() {
  for (var i = 1; i <= 122; i++) {
    images.push(
      loadImage(
        `Images/SpinningHoloBanana_0${122 - i <= 99 ? "0" : ""}${
          122 - i <= 9 ? "0" : ""
        }${122 - i}_Layer-${i}.png`
      )
    );
  }
}

function obstacleTimer() {
  setInterval(time, 100);
}

timerValue = 10;

function time() {
  if (timerValue >= 0) {
    timerValue--;
  }
  if (timerValue < 0) {
    timerValue = 10;
  }
}
