var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(200, 200) ;
}

function draw() {

  background(100);
  // put drawing code here
  //rect (x, y, 50, 50);
  text("THE CLASH", x, 100)
  x += 5 ;
  if(x > 200) {
    x = 0 ;
  }
}
