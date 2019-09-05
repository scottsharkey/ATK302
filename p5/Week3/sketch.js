function setup() {
  // put setup code here
  createCanvas(800, 800);
  background(0);
  var score = 0;
}

  var score = 0;

function draw() {
  // put drawing code here
  //background('white');
  //fill('green');
  //rect(mouseX, mouseY, 10, 10) ;
  //fill('black');
  //text('Scott', width/2, height/2,);
  //fill('orange');
  //ellipse(width/2, height/2, 250, 250)
  //ellipse(400, 200, 150, 150)
  //ellipse(400, 300, 150, 150)
  //ellipse(width/2, height/2, 150, 150)
  text(score, 10, 10);
}

function mouseReleased(){
 //background('white');
//background(random(255), random(255), random(255));
ellipse(mouseX, mouseY, 100, 100);
 score ++;

}
