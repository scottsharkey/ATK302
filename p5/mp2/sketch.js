var myState = 0;
var myTimer = 0;
var x = 0;
var y = 0;
var vel = 3;
//var song1;

function setup() {
  // put setup code here
  createCanvas(1600, 820);
  background("cyan");
  textAlign(CENTER,CENTER);
}

function draw() {
  // put drawing code here
  switch(myState) {

    case 0:
    background("cyan");
    textAlign(CENTER,CENTER);
    textSize(24);
    fill("brown");
    rect(width/2 - 50, 50, 75, 300);
    fill("green");
    rect(1, 350, 1600, 800);
    triangle(700, 100, 775, -250, 875, 100);
    fill("black");
    text("Doing my Part in Enviormental Sustainability.", width/2, height/2);
    break;

  case 1:
  background("cyan");
  textAlign(CENTER,CENTER);
  text("I feel in my own daily life I am not the most sustainable human being, though I try to do my part in the much larger problem of enviormental sustainability by recycling.", width/2 - 400, height/2 - 410, 750, 500);
  myTimer++ ;
  if (myTimer >= 1000) {
  myTimer = 0 ;
  myState = 2 ;
}
  break;

  case 2:
  background("cyan");
  fill("white");
  ellipse(x - 25, 50, 80, 50);
  ellipse(x + 25, 50, 80, 50);
  ellipse(x, 50, 90, 60);
  x = x + vel;
  if (x > width){
    x = 0;
  }
  fill("brown");
  rect(50, 50, 70, 300);
  rect(200, 0, 70, 300);
  rect(400, 25, 70, 300);
  rect(900, 0, 70, 300);
  fill("green");
  rect(1, 300, 1600, 800);
  triangle(360, 25, 425, -150, 500, 25);
  triangle(0, 50, 75, -200, 175, 50);
  fill('black');
  textAlign(CENTER,CENTER);
  text("Though I may seem like a reclusive shut in who just likes to sit around and play video games all day I have a great appriciation for nature.  I spent many year in the scouts program meeting some of my best friends till this day and I deeply enjoy being surrounded by nature and the expierence of camping.",width/2 - 400, height/2, 750, 500);
  fill("tan");
  quad(350, 100, 650, 100, 700, 360, 200, 360);
  quad(350, 100, 650, 100, 700, 360, 400, 360);
  fill("black");
  triangle(350, 100, 300, 360, 400, 360);
  myTimer++ ;
  if (myTimer >= 1000) {
  myTimer = 0 ;
  myState = 3 ;
}
  break;

  case 3:
  background("cyan");
  textAlign(CENTER,CENTER);
  fill("black");
  text("A lot of the products we consume as humans leave waste that have harmful effects on the enviorment.  I do my part to by properly recycling all of the recyclable waste that is left over from the products I consume.  As well as occasionally in service projects where I'll help clean up forested areas.",width/2 - 400, height/2 - 420, 750, 500);
  fill("blue");
  rect(790, y, 25, 50);
  y = y + vel;
  if (y > height){
    y = 0;
  }
  fill("green");
  quad(700, 530, 900, 530, 925, 580, 675, 580);
  fill("grey");
  quad(700, 580, 900, 580, 875, 819, 725, 819);
  myTimer++ ;
  if (myTimer >= 1000) {
  myTimer = 0 ;
  myState = 4 ;
}
  break;

  case 4:
  background("cyan");
  textAlign(CENTER,CENTER);
  fill("black");
  text("To replay click through this slide.",width/2 - 400, height/2 - 410, 750, 500);
  break;

}
}

function mouseReleased(){
      myState++ ;
      if (myState > 5){
        myState = 0 ;
      }
    }
