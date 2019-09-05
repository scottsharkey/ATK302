function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(800, 800); //always in the set up

}

function draw() {
  background('#3890CE');
  noStroke();

  // fill(00,100,255);
  // triangle(18, 18, 18, 360, 81, 360);//debuger r click and tools
  //
  fill('brown');
  rect(400, 500, 100, 300);

  fill('green');
  rect(0, 650, 800, 150);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  fill('yellow');
  ellipse(200, 130, 80, 80);

  fill('white');
  ellipse(530, 150, 75, 75);

  fill('white');
  ellipse(580, 150, 100, 100);

  fill('white');
  ellipse(630, 150, 75, 75);

  fill('green');
  triangle(450, 25, 588, 500, 288, 500);
  //
  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);
  fill(255);
  text(mouseX + ',' + mouseY,20,20);
}

function mouseReleased() {
  console.log(mouseX + ',' + mouseY);
}
