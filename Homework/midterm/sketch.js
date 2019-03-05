var storybookArray = [];

var frameArray = [];

var page0, page1, page2, page3, page4, page5;

var petalImage;
var petalLocationX = [];
var petalLocationY = [];
var petalAmount = 40;

var moonX = 150;
var moonY = 600;
var moonSize = 400;
var moonImage;

var summerSky;
var fireFly;

var fallOne;
var fallTwo;

var snowflakeImage;
var flakeLocationX = [];
var flakeLocationY = [];
var flakeAmount = 40;

var theEnd;
var fallTip;

var cnv;

var currentPage = 0;

function preload(){
  storybookArray[0] = loadImage("assets/springbg.png");
  storybookArray[1] = loadImage("assets/summerbg.png");
  storybookArray[2] = loadImage("assets/fallbg.png");
  storybookArray[3] = loadImage("assets/winterbg.png");
  storybookArray[4] = loadImage("assets/endbg.png");
  storybookArray[5] = loadImage("assets/titlescreen.png");

  petalImage = loadImage("assets/petal.png");
  moonImage = loadImage("assets/moon.png");
  summerSky = loadImage("assets/summerskybg.png");
  fireFly = loadImage("assets/firefly.png");
  snowflakeImage = loadImage("assets/snowflake.png");
  theEnd = loadImage("assets/endtitle.png");
  fallTip = loadImage("assets/falltip.png");

  frameArray[0] = loadImage("assets/frametwo.png");
  frameArray[1] = loadImage("assets/summerframetwo.png");
  frameArray[2] = loadImage("assets/winterframetwo.png");
  frameArray[3] = loadImage("assets/fallframetwo.png");

  fallOne = loadImage("assets/fallred.png");
  fallTwo = loadImage("assets/fallpurple.png");
}

function setup() {
  // put setup code here
  //createCanvas(600,600);

  var cnv = createCanvas(900, 584);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);

  page0 = createButton("Spring");
  page0.position(150,250);
  page0.mousePressed(function(){
    currentPage = 0;
  });
  page1 = createButton("Summer");
  page1.position(150,300);
  page1.mousePressed(function(){
    currentPage = 1;
  });
  page2 = createButton("Fall");
  page2.position(150,350);
  page2.mousePressed(function(){
    currentPage = 2;
  });
  page3 = createButton("Winter");
  page3.position(150,400);
  page3.mousePressed(function(){
    currentPage = 3;
  });
  page4 = createButton("The End");
  page4.position(150,450);
  page4.mousePressed(function(){
    currentPage = 4;
  });

  for (var p = 0; p < petalAmount; p++){
    petalLocationX[p] = random(0,width);
    petalLocationY[p] = random(0, -500);
  }

  for (var f = 0; f < flakeAmount; f++){
    flakeLocationX[f] = random(0,width);
    flakeLocationY[f] = random(0, -800);
  }
  currentPage = 5;
}

function draw() {
  // put drawing code here
  background("white");

  //SPRING
  if(currentPage == 0){
    image(storybookArray[0],0,0);

    if (mouseIsPressed) {
      image(frameArray[0],0,0);
    } else {
      image(storybookArray[0],0,0);
    }

    for (var p = 0; p < petalAmount; p++){
      image(petalImage, petalLocationX[p], petalLocationY[p], 40, 40);

      if(petalLocationY[p] < height - 20){
        petalLocationY[p]++;
        petalLocationX[p] = petalLocationX[p] + sin(radians(frameCount));
      }
    }

    //SUMMER
}else if(currentPage == 1){
      image(summerSky,0,0);
      //moon rises
  image(moonImage, moonX, moonY, 700, 475);
  if (moonY > 30) {
    moonY = moonY - 5;
  }
    if (mouseIsPressed) {
      image(frameArray[1],0,0);
    } else {
      image(storybookArray[1],0,0);
    }

  //image(storybookArray[1],0,0);
    //firefly cursor
    image(fireFly, mouseX, mouseY);

    //FALL
  }else if(currentPage == 2){
    //image(storybookArray[2],0,0);

    if (mouseIsPressed) {
      image(frameArray[3],0,0);
    } else {
      image(storybookArray[2],0,0);
    }

  if (keyIsPressed === true && key == "p") {
    image(fallOne,0,0);
  } else if (keyIsPressed === true && key == "r"){
    image(fallTwo,0,0);

  }
    image(fallTip,0,0);

    //WINTER
  }else if(currentPage == 3){
    //image(storybookArray[3],0,0);

    if (mouseIsPressed) {
      image(frameArray[2],0,0);
    } else {
      image(storybookArray[3],0,0);
    }

  for (var f = 0; f < flakeAmount; f++){
    flakeLocationY[f]++;
    image(snowflakeImage, flakeLocationX[f], flakeLocationY[f], 40, 40);

    if(flakeLocationY[f] > height){
      flakeLocationY[f] = random (-800,0);
      flakeLocationX[f] = random(0, width);
    }
  }

  //THE END
}else if(currentPage == 4){
  image(storybookArray[4],0,0);
  image(theEnd,140,230);

  for (var p = 0; p < petalAmount; p++){
    petalLocationY[p]++;
    image(petalImage, petalLocationX[p], petalLocationY[p], 40, 40);

    if(petalLocationY[p] < height - 20){
      petalLocationY[p]++;
      petalLocationX[p] = petalLocationX[p] + sin(radians(frameCount));
    }
}
}else if(currentPage == 5){
  image(storybookArray[5],0,0);
}
}
