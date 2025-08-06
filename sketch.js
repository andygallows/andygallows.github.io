  let words = ["brat", "demure", "labubu", "honey", "money", "utopia", "loba", "sugar", "rush", "frozen", "motomami", "frosti", "me&u", "365", "party4u",];
  let word;

  let textPositionX;
  let textPositionY;
  
  let textSpeedX = 4;
  let textSpeedY = 7;  

  let textHue = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textAlign(CENTER, CENTER);
  textPositionX = width/2;
  textPositionY = height/2;
  //select initial word
  selectRandomWord();
}

function draw() {
  
  let w = textWidth(word);  
  let h = textAscent(word)
  let b = textDescent(word)
  
  frameRate(15);
  //style word
  stroke(textHue, 80, 90);
  strokeWeight(windowWidth * 0.0025);
  fill(textHue * 2, 80, 90);
  textSize(windowWidth * 0.05);
  //place word
  text(word,textPositionX, textPositionY);
  
  textPositionX = textPositionX + textSpeedX;
  textPositionY = textPositionY + textSpeedY;
  textHue = textHue + 0.5;
  
  if (textHue >= 360) {
    textHue = 0;
  }
  
  if (
    textPositionX < w/2 ||
    textPositionX > width - w/2
  ) {
    textSpeedX = -textSpeedX;
  }
  
  if (
    textPositionY < h/2 ||
    textPositionY > height - h/2
  ) {
    textSpeedY = -textSpeedY;
  }
  
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background (255);
  }
}
  function selectRandomWord() {
  word = random(words);
}