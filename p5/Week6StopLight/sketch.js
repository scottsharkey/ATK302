var myState;
var timer = 0;
var x = 0;
var vel = 3;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  myState = 0;

}

function draw() {
  // put drawing code here
  background("white");
  fill('yellow');
  rect(width / 2, height / 2, 150, 500);
  switch (myState) {
    case 0:
      fill("grey");
      ellipse(width / 2, height / 2, 100, 100);
      ellipse(width / 2, height / 2 - 150, 100, 100);
      fill('green');
      ellipse(width / 2, height / 2 + 150, 100, 100);
      //text(timer, 500, 500);
      vel = 3;
      timer++;
      if (timer >= 200) {
        timer = 0;
        myState = 1;
      }
      break;

    case 1:
      fill("yellow");
      ellipse(width / 2, height / 2, 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 150, 100, 100);
      ellipse(width / 2, height / 2 + 150, 100, 100);
      //text(timer, 500, 500);
      vel = 1;
      timer++;
      if (timer >= 200) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:
      fill("grey");
      ellipse(width / 2, height / 2, 100, 100);
      ellipse(width / 2, height / 2 + 150, 100, 100);
      fill('red');
      ellipse(width / 2, height / 2 - 150, 100, 100);
      vel = 0;
      //text(timer, 500, 500);
      timer++;
      if (timer >= 200) {
        timer = 0;
        myState = 0;
      }
      break;
  }
  fill("purple");
  rect(x, height-100, 80, 50);
  x = x + vel;
  if (x > width){
    x = 0;
  }
}
