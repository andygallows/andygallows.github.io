let img;

function preload() {
  img = loadImage('/images/qr.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(50, 50, 50);
  //vertical rectangle in the center
  fill(0,0,0);
  noStroke();
  rect(windowWidth*.5-100,windowHeight*.5-175,200,350);
  
  fill(mouseY*.3);
  textSize(200);
  textAlign(CENTER,CENTER);
  text('X',windowWidth*.5,windowHeight*.5);
  
  fill(255);
  textSize(12);
  text('RACHANA PATEL\n+1 929 505 3729\nRACHANA@EXTRASILKY.CO',windowWidth*.5,windowHeight*.5-125);
  
  imageMode(CORNERS);
  image(img,windowWidth*.5-50,windowHeight*.5+70,windowWidth*.5+50,windowHeight*.5+170);

}
