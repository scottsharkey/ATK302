var k;
var myFont;

function preload(){
    myFont = loadFont('assets/metal lord.ttf');

}


function setup() {
  // put setup code here
  createCanvas(800, 800);
  k=loadImage('assets/noneofmy.gif');
  song1.play();
}

function draw() {
  // put drawing code here
  image(k, 80, 80);
  textFont(myFont);
  textSize(36);
  text("Thats none of my buisness", 80, 400);
}
