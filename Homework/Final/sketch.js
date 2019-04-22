var bgBlurry;
var character;

var img;

var imageSprite;

var barArray = [];

//egg - veggie 1
var eggSprite;
var eggLocationX = [];
var eggLocationY = [];
var eggImage;
var eggAmount = 100;

var eggCaught = false;

//SHRIMP - veggie 2 - STEP 0 -- DONT FORGET TO LOAD THE IMAGE IN THE PRELOAD!!
var shrimpImage;
var shrimpCaught = false;

//PORK - veggie 3
var porkImage;
var porkCaught = false;

//BROCC0LI - veggie 4
var broccoliImage;
var broccoliCaught = false;

//MUSHROOM - veggie 5
var mushroomImage;
var mushroomCaught = false;

//NOODLE - veggie 6
var noodleImage;
var noodleCaught = false;

//NARUTO - veggie 7
var narutoImage;
var narutoCaught = false;

//character location


function preload(){
  bgBlurry = loadImage("Assets/Background/bg-blurry.png");
  //character = loadImage("assets/character/Character.png");
  bugImage = loadImage("Assets/Bad/Bug.png");
  eggImage = loadImage("Assets/Veggies/Egg.png");
  shrimpImage = loadImage("Assets/Veggies/Shrimp.png");
  porkImage = loadImage("Assets/Veggies/Pork.png");
  broccoliImage = loadImage("Assets/Veggies/Broccoli.png");
  mushroomImage = loadImage("Assets/Veggies/Mushroom.png");
  noodleImage = loadImage("Assets/Veggies/Noodles.png");
  narutoImage = loadImage("Assets/Veggies/Naruto.png");

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

//EGG - veggie 1 - STEP 1
//var egg = loadImage("Assets/Veggies/Egg.png");
eggSprite = createSprite(260,-60);
eggSprite.addImage(eggImage);

//SHRIMP - veggie 2
shrimpSprite = createSprite(460,-560);
shrimpSprite.addImage(shrimpImage);

//PORK - veggie 3
porkSprite = createSprite(160, -1060);
porkSprite.addImage(porkImage);

//BROCCOLI - veggie 4
broccoliSprite = createSprite(560, -1560);
broccoliSprite.addImage(broccoliImage);

//MUSHROOM - veggie 5
mushroomSprite = createSprite(160, -2060);
mushroomSprite.addImage(mushroomImage);

//NOODLES - veggie 6
noodleSprite = createSprite(360, -2560);
noodleSprite.addImage(noodleImage);

//NARUTO - veggie 7
narutoSprite = createSprite(120, -3060);
narutoSprite.addImage(narutoImage);

 img = loadImage("Assets/Character/Character.png");
  imageSprite = createSprite(160, 530);
//imageSprite.addImage(img);

imageSprite.addAnimation('blinking', 'Assets/Character/Character0.png', 'Assets/Character/Character1.png', 'Assets/Character/Character2.png', 'Assets/Character/Character3.png', 'Assets/Character/Character4.png', 'Assets/Character/Character5.png', 'Assets/Character/Character6.png', 'Assets/Character/Character7.png', 'Assets/Character/Character8.png', 'Assets/Character/Character9.png', 'Assets/Character/Character10.png', 'Assets/Character/Character11.png', 'Assets/Character/Character12.png', 'Assets/Character/Character13.png', 'Assets/Character/Character14.png', 'Assets/Character/Character15.png');
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

    //STEP 2
    //when the egg overlaps the waitress then it toggles a variable that determines that the waitress caught the egg
    // these patterns below have to be repeated for every ingredient
    if(imageSprite.overlap(eggSprite) == true){
      //eggCaught declared abaove
      eggCaught = true;
    }else{
      //moves the egg down the screen
      eggSprite.velocity.y = 2;

    }

    //if the egg goes passed the height it resets back to the top

    if(eggSprite.position.y > height){
      eggSprite.position.y = random(-300,-100);
      eggSprite.position.x = random(0,width);
    }

//SHRIMP - VEGGIE 2
    if(imageSprite.overlap(shrimpSprite) == true){
      shrimpCaught = true;
    }else{
      shrimpSprite.velocity.y = 2;

    }
    if(shrimpSprite.position.y > height){
      shrimpSprite.position.y = random(-300,-100);
      shrimpSprite.position.x = random(0,width);
    }

  //PORK - VEGGIE 3
      if(imageSprite.overlap(porkSprite) == true){
        porkCaught = true;
      }else{
        porkSprite.velocity.y = 2;

      }
      if(porkSprite.position.y > height){
        porkSprite.position.y = random(-300,-100);
        porkSprite.position.x = random(0,width);
      }

  //BROCCOLI - VEGGIE 4
      if(imageSprite.overlap(broccoliSprite) == true){
        broccoliCaught = true;
      }else{
        broccoliSprite.velocity.y = 2;

      }
      if(broccoliSprite.position.y > height){
        broccoliSprite.position.y = random(-300,-100);
        broccoliSprite.position.x = random(0,width);
      }

  //MUSHROOM - VEGGIE 5
      if(imageSprite.overlap(mushroomSprite) == true){
        mushroomCaught = true;
      }else{
        mushroomSprite.velocity.y = 2;

      }
      if(mushroomSprite.position.y > height){
        mushroomSprite.position.y = random(-300,-100);
        mushroomSprite.position.x = random(0,width);
      }

  //NOODLE - VEGGIE 6
      if(imageSprite.overlap(noodleSprite) == true){
        noodleCaught = true;
      }else{
        noodleSprite.velocity.y = 2;

      }
      if(noodleSprite.position.y > height){
        noodleSprite.position.y = random(-300,-100);
        noodleSprite.position.x = random(0,width);
      }

  //NOODLE - VEGGIE 6
      if(imageSprite.overlap(narutoSprite) == true){
        narutoCaught = true;
      }else{
        narutoSprite.velocity.y = 2;

      }
      if(narutoSprite.position.y > height){
        narutoSprite.position.y = random(-300,-100);
        narutoSprite.position.x = random(0,width);
      }

    /*
    if(imageSprite.overlap(shrimpSprite) == true){
      //shrimpCaught not declared
      //when the shrimp overlaps the waitress then it toggles a variable that determines that the waitress caught the shrimp
      shrimpCaught = true;
    }else{
      shrimpSprite.velocity.y = 2;
    }
    //if the shrimp goes passed the height it resets back to the top
    if(shrimpSprite.position.y > height){
      shrimpSprite.position.y = random(-300,-100);
      shrimpSprite.position.x = random(0,width);
    }
    */






  image(barArray[0],0,0);


  drawSprites();

  //STEP 3
  //When the egg is caugh draw a check mark and make the eggs position the location of the waitress/bowl
  if(eggCaught == true){
    textSize(32);
    text("✔", 55 ,55 );

    // Sets the position of the egg to the bowl
    eggSprite.position.y = imageSprite.position.y - 10;

    // Depending where she is facing the egg will move properly with the bowl
    if(imageSprite.velocity.x == 2){
      eggSprite.position.x = imageSprite.position.x  + 50;
    }

    if(imageSprite.velocity.x == -2){
      eggSprite.position.x = imageSprite.position.x  - 50;
    }

  }

  //SHRIMP - VEGGIE 2
  if(shrimpCaught == true){
    textSize(32);
    text("✔", 125 ,55 );

    // Sets the position of the egg to the bowl
    shrimpSprite.position.y = imageSprite.position.y - 10;

    // Depending where she is facing the egg will move properly with the bowl
    if(imageSprite.velocity.x == 2){
      shrimpSprite.position.x = imageSprite.position.x  + 90;
    }

    if(imageSprite.velocity.x == -2){
      shrimpSprite.position.x = imageSprite.position.x  - 90;
    }

  }

  //PORK - VEGGIE 3
  if(porkCaught == true){
    textSize(32);
    text("✔", 205 ,55 );

    // Sets the position of the egg to the bowl
    porkSprite.position.y = imageSprite.position.y - 10;

    // Depending where she is facing the egg will move properly with the bowl
    if(imageSprite.velocity.x == 2){
      porkSprite.position.x = imageSprite.position.x  + 90;
    }

    if(imageSprite.velocity.x == -2){
      porkSprite.position.x = imageSprite.position.x  - 90;
    }

  }

  //BROCCOLI - VEGGIE 4
  if(broccoliCaught == true){
    textSize(32);
    text("✔", 295 ,55 );

    // Sets the position of the egg to the bowl
    broccoliSprite.position.y = imageSprite.position.y - 10;

    // Depending where she is facing the egg will move properly with the bowl
    if(imageSprite.velocity.x == 2){
      broccoliSprite.position.x = imageSprite.position.x  + 60;
    }

    if(imageSprite.velocity.x == -2){
      broccoliSprite.position.x = imageSprite.position.x  - 60;
    }

  }
  //MUSHROOM - VEGGIE 5
  if(mushroomCaught == true){
    textSize(32);
    text("✔", 383 ,55 );

    // Sets the position of the egg to the bowl
    mushroomSprite.position.y = imageSprite.position.y - 10;

    // Depending where she is facing the egg will move properly with the bowl
    if(imageSprite.velocity.x == 2){
      mushroomSprite.position.x = imageSprite.position.x  + 90;
    }

    if(imageSprite.velocity.x == -2){
      mushroomSprite.position.x = imageSprite.position.x  - 90;
    }

  }

  //NOODLE - VEGGIE 6
  if(noodleCaught == true){
    textSize(32);
    text("✔", 483 ,55 );

    // Sets the position of the egg to the bowl
    noodleSprite.position.y = imageSprite.position.y - 10;

    // Depending where she is facing the egg will move properly with the bowl
    if(imageSprite.velocity.x == 2){
      noodleSprite.position.x = imageSprite.position.x  + 80;
    }

    if(imageSprite.velocity.x == -2){
      noodleSprite.position.x = imageSprite.position.x  - 80;
    }

  }

  //NARUTO - VEGGIE 7
  if(narutoCaught == true){
    textSize(32);
    text("✔", 583 ,55 );

    // Sets the position of the egg to the bowl
    narutoSprite.position.y = imageSprite.position.y - 10;

    // Depending where she is facing the egg will move properly with the bowl
    if(imageSprite.velocity.x == 2){
      narutoSprite.position.x = imageSprite.position.x  + 60;
    }

    if(imageSprite.velocity.x == -2){
      narutoSprite.position.x = imageSprite.position.x  - 60;
    }

  }

  /*
  //When the shrimp is caugh draw a check mark and make the shrimp position the location of the waitress/bowl
  if(shrimpCaught == true){
    textSize(32);
    //not sure the position x is correct
    text("✔", 105 ,55 );
    // Sets the position of the egg to the bowl
    shrimpSprite.position.y = imageSprite.position.y - 10;
    // Depending where she is facing the egg will move properly with the bowl
    if(imageSprite.velocity.x == 2){
      shrimpSprite.position.x = imageSprite.position.x  + 50;
    }
    if(imageSprite.velocity.x == -2){
      shrimpSprite.position.x = imageSprite.position.x  - 50;
    }
  }
  */



}
