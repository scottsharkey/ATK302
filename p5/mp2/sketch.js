var myState = 0;
var myTimer = 0;
//var song1;

/*function preload(){
  song1 = loadSound('asset/YEET!.mp3');
}*/

function setup() {
  // put setup code here
  createCanvas(800, 800);
  background("white");
}

function draw() {
  // put drawing code here
  switch (myState) {

    case 0:
    background("white");
    text("My Part in Global Sustainability.",100,100);

    break;

  case 1:
  background("white");
  text("S2",500,500);
  myTimer++ ;
  if (myTimer >= 200) {
  myTimer = 0 ;
  myState = 2 ;
}
  break;

  case 2:
  background("white");
  text("S3",300,450);
  myTimer++ ;
  if (myTimer >= 200) {
  myTimer = 0 ;
  myState = 3 ;
}
  break;

  case 3:
  background("white");
  text("This Bitch Empty Yeet!",300,450);
  //song1.play();
  myTimer++ ;
  if (myTimer >= 200) {
  myTimer = 0 ;
  myState = 4 ;
}
  break;

  case 4:
  background("white");
  text("S5",300,450);
  myTimer++ ;
  if (myTimer >= 200) {
  myTimer = 0 ;
  myState = 5 ;
}
  break;

  case 5:
  background("white");
  text("Fin.",300,450);

}
}
function mouseReleased(){
      myState++ ;
      if (myState > 5){
        myState = 0 ;
      }
    }
