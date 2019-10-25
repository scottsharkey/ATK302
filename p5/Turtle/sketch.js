var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaR, yodaL;
var bird;
var birds = [];
var myFont;
var x = 0;
var vel = 3;
var bg;
var song1;

function preload(){
  song1 = loadSound('assets/underwatersound.mp3');
}


function setup() {

  bg = loadImage('assets/underwater.jpg', 1000, 800);
  createCanvas(800, 800);
  birds[0] = loadImage("assets/Straw.png");
  birds[1] = loadImage("assets/Straw.png");
  birds[2] = loadImage("assets/Straw.png");
  myFont = loadFont('assets/Road_Rage.otf');


  for (var i = 0; i < 50; i++)
  {
    cars.push(new Car());
  }
yodaR = loadImage("assets/TurtleR.png");
yodaL = loadImage("assets/TurtleL.png");
yoda = yodaR;
bird = loadImage("assets/Straw.png");
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
}


function draw() {
  switch (myState) {

    case 0: // splash screen
    background("blue");
    background(bg);
    fill("white");
    textFont(myFont);
    textSize(36);
    text("Click to Play Straw Slaughter!", 100, 400);
      break;

    case 1: // the game state
      game();
      timer++;
      if (timer>5000){
        myState = 3;
        timer = 0 ;
      }
      break;

    case 2: // the win state
    background("blue");
    background(bg);
    fill("white");
    textFont(myFont);
    textSize(36);
    text("You Win!", 100, 400);
    text("Click to Play Again!", 100, 600);
      break;

    case 3: // the lose state
    background("blue");
    background(bg);
    fill("white");
    textFont(myFont);
    textSize(36);
    text("You Lose!", 100, 400);
    text("Click to Try Again!", 100, 600);
      break;

  }
}

function mouseReleased() {
switch(myState){
  case 0:
  myState = 1;
  break;

  case 2:
  resetTheGame();
  myState = 0;
  break;

  case 3:
  resetTheGame();
  myState = 0;
  break;

  }
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length-1));
  this.timer = 0;
  this.maxTimer = random(10, 30);


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 100, 50);
    //ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    //ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
    image(birds[this.birdNum], this.pos.x, this.pos.y, 10, 40);

      this.timer = this.timer + 1;
      if (this.timer > this.maxTimer) {
        this.birdNum = this.birdNum + 1;
        this.timer = 0;
      }
      if (this.birdNum > birds.length-1) this.birdNum = 0;
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed()
{
  if (keyCode == LEFT_ARROW) yoda = yodaL;
  if (keyCode == RIGHT_ARROW) yoda = yodaR;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}



function game() {
  background("blue");
  song1.play();
  background(bg);
  fill("lime");
  triangle(x-40, 400, x-10, 425, x-40, 450);
  fill("blue");
  ellipse(x, 425, 60, 40);
  fill("blue");
  triangle(x-40, 175, x-10, 200, x-40, 225);
  fill("cyan");
  ellipse(x, 200, 60, 40);
  fill("red");
  triangle(x+10, 295, x+30, 320, x+10, 345);
  fill("orange");
  ellipse(x+50, 320, 60, 40);
  x = x + vel;
  if (x > width){
    x = 0;
  }
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }


if (cars.length == 0){
  myState = 2;
}
  // draw the frog
  fill('green');
  //ellipse(frogPos.x, frogPos.y, 60, 60);
  image(yoda, frogPos.x, frogPos.y, 100, 75);
  checkForKeys();
}
function resetTheGame(){
  cars = [];

  for (var i = 0; i < 50; i++) {
    cars.push(new Car());
  }
  timer = 0;
}
