// "Vector Four Seasons Background" by FreeVector. This file was created by freevector.com and is distributed under the 'Standard License' license.

var spring;
var summer;
var fall;
var winter;

var springButton;
var summerButton;
var fallButton;
var winterButton;

var currentImage = 4;

function preload(){
  spring = loadImage("assets/spring.jpg");
  summer = loadImage("assets/summer.jpg");
  fall = loadImage("assets/fall.jpg");
  winter = loadImage("assets/winter.jpg");
}

function setup() {
  // put setup code here
  createCanvas(600,600);
  springButton = createButton("Spring");
  springButton.position(30,520);
  springButton.mousePressed(function(){
    currentImage = 0;
  });

  summerButton = createButton("Summer");
  summerButton.position(110,520);
  summerButton.mousePressed(function(){
    currentImage = 1;
  });

  fallButton = createButton("Fall");
  fallButton.position(200,520);
  fallButton.mousePressed(function(){
    currentImage = 2;
  });

  winterButton = createButton("Winter");
  winterButton.position(260,520);
  winterButton.mousePressed(function(){
    currentImage = 3;
  });
}

function draw() {
  // put drawing code here
  textSize(16);
  fill("brown");
  text('The Life of a Tree by Grettel Alvarez', 10, 15);

  textSize(16);
  fill("green");
  text('Press "Spring" to start the trees story through the seasons...', 50, 300);

  if(currentImage == 0){
    image(spring, 0, 20, spring.width, spring.height);
  }else if(currentImage == 1){
    image(summer, 0, 20, summer.width, summer.height);
  }else if(currentImage == 2){
    image(fall, 0, 20, fall.width, fall.height);
  }else if (currentImage == 3){
    image(winter, 0, 20, winter.width, winter.height);
  }
}
