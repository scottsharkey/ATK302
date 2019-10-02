var k;
var myFont;
var song1;
var x = 0 ;

function preload(){
    myFont = loadFont('assets/metal lord.ttf');
    song1 = loadSound('assets/thatsthetea.mp3');

}


function setup() {
  // put setup code here
  createCanvas(800, 800);
  background("white");
  k=loadImage('assets/noneofmy.gif');
  song1.play();
}

function draw() {
  // put drawing code here
  image(k, 80, 80);
  textFont(myFont);
  textSize(36);
  text("Thats none of my buisness", x, 400);
  x += 5 ;
  if (x > width) {
    x = 0 ;
  }
}
