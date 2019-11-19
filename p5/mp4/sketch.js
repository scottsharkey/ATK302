var img;
function preload() {
 img = loadImage("Yoda.gif");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  setShakeThreshold(50);
  colorMode(HSB);
  background(0);
  img.loadPixels();
  image(img, 17, 17);
}


function deviceShaken() {
  var w = random(555);
  var h = random(790);
  var r = windowHeight/windowWidth;
  var iw = random(100,355);
  var ih = iw*r;
  copy(img,w,h,iw,ih,0,0,windowWidth,windowHeight);
  background(h, 255, 255);
}
