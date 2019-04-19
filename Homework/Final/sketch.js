var bgBlurry;
var character;

var img;

var imageSprite;

var barArray = [];

//LADYBUG OF HELL
var bugLocationX = [];
var bugLocationY = [];
var bugImage;
var bugAmount = 100;

//EGGS ARE GREAT
var eggSprite;
var eggLocationX = [];
var eggLocationY = [];
var eggImage;
var eggAmount = 100;

//character location


function preload(){
  bgBlurry = loadImage("Assets/Background/bg-blurry.png");
  //character = loadImage("assets/character/Character.png");
  bugImage = loadImage("Assets/Bad/Bug.png");
  eggImage = loadImage("Assets/Veggies/Egg.png");

    barArray[0] = loadImage("assets/Bar/Bar-0.png");
    barArray[1] = loadImage("assets/Bar/Bar-1.png");
    barArray[2] = loadImage("assets/Bar/Bar-2.png");
    barArray[3] = loadImage("assets/Bar/Bar-3.png");
    barArray[4] = loadImage("assets/Bar/Bar-4.png");
    barArray[5] = loadImage("assets/Bar/Bar-5.png");
    barArray[6] = loadImage("assets/Bar/Bar-6.png");
    barArray[7] = loadImage("assets/Bar/Bar-7.png");

}

function setup() {
  // put setup code here
  var cnv = createCanvas(650, 700);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);

//EGGGGGS
//var egg = loadImage("Assets/Veggies/Egg.png");
eggSprite = createSprite(260,130);
eggSprite.addImage(eggImage);

 img = loadImage("Assets/Character/Character.png");
  imageSprite = createSprite(160, 530);
//imageSprite.addImage(img);

imageSprite.addAnimation('blinking', 'Assets/Character/Character0.png', 'Assets/Character/Character1.png', 'Assets/Character/Character2.png', 'Assets/Character/Character3.png', 'Assets/Character/Character4.png', 'Assets/Character/Character5.png', 'Assets/Character/Character6.png', 'Assets/Character/Character7.png', 'Assets/Character/Character8.png', 'Assets/Character/Character9.png', 'Assets/Character/Character10.png', 'Assets/Character/Character11.png', 'Assets/Character/Character12.png', 'Assets/Character/Character13.png', 'Assets/Character/Character14.png', 'Assets/Character/Character15.png');
}
//bug;
for (var i = 0; i < bugAmount; i++) {
  bugLocationX[i] = 200;
  bugLocationY[i] = -50;
}

//egg;
for (var i = 0; i < eggAmount; i++) {
  eggLocationX[i] = 400;
  eggLocationY[i] = -100;
}

function draw() {
  background("red");
  image(bgBlurry,0,0);

    //if mouse is to the left
    if(mouseX < imageSprite.position.x - 10) {
      imageSprite.changeAnimation('blinking');
          //flip horizontally
      imageSprite.mirrorX(-1);
      //negative x velocity: move left
      imageSprite.velocity.x = -2;
    }
    else if(mouseX > imageSprite.position.x + 10) {
      imageSprite.changeAnimation('blinking');
          //unflip
      imageSprite.mirrorX(1);
      imageSprite.velocity.x = 2;
    }
    else {
      //if close to the mouse, don't move
      imageSprite.changeAnimation('blinking');
      imageSprite.velocity.x = 0;
    }

//BUGGGGS
    for (var i = 0; i < bugAmount; i++) {
      image(bugImage, bugLocationX[i], bugLocationY[i], 48,51);

      if(bugLocationY[i] < height - 0){
        bugLocationY[i]++;
        bugLocationX[i];
      }

    }
  //BUGGGGS
    for (var i = 0; i < eggAmount; i++) {
      image(eggImage, eggLocationX[i], eggLocationY[i], 96,102);

      if(eggLocationY[i] < height - 0){
        eggLocationY[i]++;
        eggLocationX[i];
  }

}

  image(barArray[0],0,0);


  drawSprites();
}
