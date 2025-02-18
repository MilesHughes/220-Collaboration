canvasX = screen.width;
canvasY = screen.height;

function preload() {
  myfont = loadFont("Fonts/Oswald-VariableFont_wght.ttf");
  loadAnimation();
}

function setup() {
  createCanvas(canvasX, canvasY);
  obstacleSetup();
  obstacleTimer();
  characterSetup();
}

function draw() {
  background(0);
  characters();
  obstacleMovement();
  collision();
  interface();
}

var character = [];

function characters() {
  character[0].draw();
  character[0].movement();
}

function characterSetup() {
  character[0] = new makeCharacter(charX, charY, charSize);
}

var obstacles = [];
var obstacleCount = 5;

function drawAnimation() {
  for (var i = 0; i < obstacleCount; i++) {
    obstacles[i].drawAnimation();
  }
}

function interface() {
  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(20);
  textFont(myfont);
  text("Greg Simmerman", 770, 800);
  textSize(30);
  text("(This game does not have a name yet)", 30, 50);
}

function obstacleMovement() {
  for (var i = 0; i < obstacleCount; i++) {
    obstacles[i].drawAnimation();
    obstacles[i].obstacleMovement();
  }
}

function collision() {
  for (var i = 0; i < obstacleCount; i++) {
    obstacles[i].obstacleCollision();
  }
}
