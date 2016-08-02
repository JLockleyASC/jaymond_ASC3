var value = 255;
var value2=255;
var i = 0;
function setup(){
    createCanvas(1000,1000);
    
}


function draw() {
    fill(value,255,255);var value = 255;
var value2=255;
var i = 0;
function setup(){
    createCanvas(1000,1000);
    
}


function draw() {
    fill(value,255,255);
    rect(20,20,50,100);
    fill(value2,255,255);
    rect(70,20,50,100);
    rect(120,20,50,100);
    rect(170,20,50,100);
    rect(220,20,50,100);
    rect(270,20,50,100);
    rect(320,20,50,100);
    rect(370,20,50,100);
    rect(420,20,50,100);
    rect(470,20,50,100);
    rect(520,20,50,100);
    rect(570,20,50,100);
    rect(620,20,50,100);

      if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
 rect(20,20,50,100);
}
    
}

    
function draw() {
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;

  clear();
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
}