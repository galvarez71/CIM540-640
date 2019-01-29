//Global Variables
var backgroundColor = "blue"; //Strings
var colormimi = "green";
var bow = "red";
var strokecolor = "black";
var textcolor = "yellow";

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  createCanvas(600,700);
  background(backgroundColor);

  // left ponytail - first part
  strokeWeight(4);
  stroke("black");
  fill("green");
  rect(100,100,90,90);

  // left ponytail - second part
  fill(colormimi);
  rect(90,160,50,50);

  // left ponytail - third part
  fill(colormimi);
  rect(130,190,30,40);

  //right ponytail - first part
  fill(colormimi);
  rect(355,100,90,90);

  //right ponytail - second part
  fill(colormimi);
  rect(430,160,50,50);

  // right ponytail - third part
  fill(colormimi);
  rect(410,190,30,40);

  //body - torso
  strokeWeight(7);
  stroke("black");
  fill("yellow");
  rect(235,320,80,90);

  strokeWeight(1);

  //red bow - left part
  strokeWeight(7);
  stroke(strokecolor);
  fill(bow);
  triangle(235,340,235,385,270,360);

  strokeWeight(1);

  //red bow - right part
  strokeWeight(7);
  stroke(strokecolor);
  fill(bow);
  triangle(315,340,315,385,270,360);

  strokeWeight(1);

  //left arm
  strokeWeight(7);
  stroke("black");
  line(235,345,90,375);

  strokeWeight(1);

  //right arm
  strokeWeight(7);
  stroke("black");
  line(315,345,460,375);

  strokeWeight(1);

  //head
  strokeWeight(4);
  stroke("black");
  fill("green");
  rect(180,165,190,180);

  strokeWeight(1);

  //left leg
  strokeWeight(7);
  stroke("black");
  line(235,450,240,600);

  strokeWeight(1);

  //right leg
  strokeWeight(7);
  stroke("black");
  line(305,450,305,600);

  strokeWeight(1);

  //first eye
  fill("black");
  ellipse(235,250,15,25);

  //second eye
  fill("black");
  ellipse(310,250,15,25);

  //left cheek
  strokeWeight(0);
  fill("pink");
  ellipse(220,290,35,15);

  //right cheek
  strokeWeight(0);
  fill("pink");
  ellipse(330,290,35,15);

  //skirt
  strokeWeight(7);
  stroke("black");
  fill("yellow");
  arc(275, 410, 230, 230, 0, PI);

  strokeWeight(1);

  //mouth
  strokeWeight(0);
  fill("red");
  arc(275, 305, 40, 30, 0, PI);

  //eyelash right
  fill("black");
  triangle(310, 250, 315, 240, 330, 235);

  //eyelash left
  fill("black");
  triangle(235, 240, 235, 250, 215, 235);

  //belt
  strokeWeight(7);
  stroke("black");
  line(160,410,390,410);

  //belly
  strokeWeight(0);
  fill("yellow");
  rect(239,405,73,60);

  strokeWeight(1);

  textSize(28);
  fill(textcolor);
  text('Mimi from Super Paper Mario', 100, 30);
  textSize(16);
  text('By Grettel Alvarez     CIM540-640      Professor Rodriguez',100,50);

}
