var myTimer = 0;
var myState = 0 ;
var myBackground ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  myBackground = color(random(255), random(255), random(255));
  timer = 0 ;
  }

function draw() {
  // put drawing code here
  switch(myState){

case 0:
background(myBackground);
text("knock knock", 100, 100);
myTimer++ ;
if (myTimer >= 200) {
  myTimer = 0 ;
  myState = 1 ;
  myBackground = color(random(255), random(255), random(255));
}
break;

case 1:
background(myBackground);
text("Whos there?", 100, 100);
myTimer++ ;
if (myTimer >= 200) {
  myTimer = 0 ;
  myState = 2 ;
  myBackground = color(random(255), random(255), random(255));
}
break;

case 2:
background(myBackground);
text("Me, who?", 100, 100);
myTimer++ ;
if (myTimer >= 200) {
  myTimer = 0 ;
  myState = 3 ;
  myBackground = color(random(255), random(255), random(255));
}
break;

case 3:
background(155, 0, 0)
text("Me, who missed your first class", 100, 100)
myTimer++ ;
if (myTimer >= 200) {
myTimer = 0 ;
myState = 0 ;
myBackground = color(random(255), random(255), random(255));
}
break;


}
}
