var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(200, 200) ;

}

function draw() {
  // put drawing code here
  background(100);
  rect(x, height/2, 10, 10) ;
  x = x + 5 ;

  if (x > width) {

    x = 0 ;
  }

}
