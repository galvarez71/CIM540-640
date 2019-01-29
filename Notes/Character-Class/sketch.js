function setup() {
  // put setup code here
  createCanvas(500,500);
  background("red");

}

function draw() {
  // put drawing code here
  strokeWeight(1);
  stroke(0,255,0);

  // first eye
  fill("white");
  ellipse(155,175,25,30);

  // first pupil
  fill("black");
  ellipse(150,175,10,10);

  // head
  fill("brown");
  ellipse(200,200,100,100);

  // mouth
  fill("brown");
  rect(100,200,75,20);
  rect(100,230,75,10);

  // nose
  fill("brown");
  ellipse(100,200,10,10);

  strokeWeight(10);
  point(100,200);

  strokeWeight(1);
  // second eye
  fill("white");
  ellipse(170, 175, 25, 30);

  // second pupil
  fill("black");
  ellipse(165,175,10,10);

  // neck
  fill("brown");
  rect(175,250,50,50);

  // body
  fill("brown");
  rect(200,275,150,100,10);

  // ears
  fill("brown");
  triangle(175,150,200,100,200,150);
  triangle(175 + 10,150,200 + 10,100,200 + 10,150);

  // tail
  strokeWeight(15);
  stroke("green");
  line(350,275,350+50,275-50);

  noFill();
  strokeWeight(5);
  angleMode(DEGREES);
  arc(200,400,50,50,135,270);
  arc(225,400,50,50,135,270);
  arc(325,400,50,50,135,270);
  arc(350,400,50,50,135,270);


}
