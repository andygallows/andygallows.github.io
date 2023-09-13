// let c = (24,138,104);

function setup(){
  createCanvas(windowWidth,windowHeight);
}


function draw(){
  background(255);


  // let c = color(24,138,104);
  //   fill(c);
  //   rect(25, 25, 50, 50); 

  ellipseMode(CORNERS);
  fill(24,138,104);
  noStroke();
  ellipse(width*.01,height*.01,width*.99,height*.5-mouseY*.4);

  // ellipseMode(CORNERS);
  // fill(c);
  // noStroke();
  // ellipse(width*.01,height*.01,width*.99,height*.5-mouseY*.4);

  ellipseMode(CORNERS);
  fill(246,36,7);
  noStroke();
  ellipse(width*.01,height*.4-mouseY*.32,width*.99,height*.76-mouseY*.52);
  
  ellipseMode(CORNERS);
  fill(237,164,170);
  noStroke();
  ellipse(width*.01,height*.69-mouseY*.51,width*.99,height*.9-mouseY*.3);

  ellipseMode(CORNERS);
  fill(48,86,220);
  noStroke();
  ellipse(width*.01,height*.88-mouseY*.4,width*.99,height*.99);
}

// function mouseClicked() {
//   if (c === 24,138,104) {
//     c = 255,204,0;
//   } else {
//     c = 24,138,104;
//   }
// }



function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}