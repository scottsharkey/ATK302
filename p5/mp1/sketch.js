function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
// the not pressed state
    ellipse(50, 50, 50, 50);

  } else {
// the not pressed state
    rect(width/25, height/25, 50, 50);
  }

}

function mouseReleased() {
  console.log(mouseX + ',' + mouseY);
}
