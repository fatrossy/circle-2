function setup() {
  createCanvas(800,600);
  //background(255)
  noFill();
  angleMode(DEGREES);
  frameRate(20);
}

function draw() {
  translate(400,300);
  var r=frameCount*3;
  var col1=color('#ea0043');
  var col2=color('#0fefca');
  if (frameCount<121)
  {rotate(r);
  ellipse(50,0,200,200);
  stroke(lerpColor(col1,col2,r/360));
    }
    
    else 
    {
      rotate(-r);
      ellipse(50,0,200,200);
  stroke(lerpColor(col2,col1,r/360));
    }
   
    
}