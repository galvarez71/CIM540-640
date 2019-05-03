var bgBlurry;
var character;

var img;

var tryButton;

var imageSprite;

var barArray = [];

var mySound;
var startSound;
var popSound;
var winSound;

var page0, page1, page2, page3, page4;
var currentPage = 0;

var startScreen;
var startButton;
var startHover;
var howButton;
var howHover;

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

//FISH - enemy 1
var fishImage;
var fishCaught = false;

//BUG - enemy 2
var bugImage;
var bugCaught = false;

//EGG SHELL - enemy 3
var shellImage;
var shellCaught = false;

//SODA - enemy 4
var sodaImage;
var sodaCaught = false;

var isOverCircle;
var isOverHow;

var gameOver;
var youWin;
var instructions;

var backButton;
var tryAgainX;
var tryAgainY;
//character location

function preload() {
  bgBlurry = loadImage("Assets/Background/bg_expanded.png");

  eggImage = loadImage("Assets/Veggies/Egg.png");
  shrimpImage = loadImage("Assets/Veggies/Shrimp.png");
  porkImage = loadImage("Assets/Veggies/Pork.png");
  broccoliImage = loadImage("Assets/Veggies/Broccoli.png");
  mushroomImage = loadImage("Assets/Veggies/Mushroom.png");
  noodleImage = loadImage("Assets/Veggies/Noodles.png");
  narutoImage = loadImage("Assets/Veggies/Naruto.png");

  fishImage = loadImage("Assets/Bad/Fish.png");
  bugImage = loadImage("Assets/Bad/Bug.png");
  shellImage = loadImage("Assets/Bad/Shell.png");
  sodaImage = loadImage("Assets/Bad/Soda.png");

  startScreen = loadImage("Assets/Background/start-screen.png");
  startButton = loadImage("Assets/Buttons/start.png");
  startHover = loadImage("Assets/Buttons/start_hover.png");

  howButton = loadImage("Assets/Buttons/howto.png");
  howHover = loadImage("Assets/Buttons/how_hover.png");

  backButton = loadImage("Assets/Buttons/back_button.png");
  tryButton = loadImage("Assets/Buttons/try-again.png");

  gameOver = loadImage("Assets/Background/game-over.png");
  youWin = loadImage("Assets/Background/you-win.png");
  instructions = loadImage("Assets/Background/instructions.png");

  barArray[0] = loadImage("assets/Bar/Bar-0.png");
  barArray[1] = loadImage("assets/Bar/Bar-1.png");
  barArray[2] = loadImage("assets/Bar/Bar-2.png");
  barArray[3] = loadImage("assets/Bar/Bar-3.png");
  barArray[4] = loadImage("assets/Bar/Bar-4.png");
  barArray[5] = loadImage("assets/Bar/Bar-5.png");
  barArray[6] = loadImage("assets/Bar/Bar-6.png");
  barArray[7] = loadImage("assets/Bar/Bar-7.png");

  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound("Assets/Music/game-music.mp3");
  startSound = loadSound("Assets/Music/start-music.wav");
  popSound = loadSound("Assets/Music/pop.mp3");
  winSound = loadSound("Assets/Music/kungfu-yell.mp3");



}

function setup() {
  // put setup code here
  var cnv = createCanvas(1154, 700);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);

  startSound.setVolume(0.1);
  startSound.play();
  mySound.stop();
  page0 = createButton("Menu");
  page0.position(90, 250);
  page0.mousePressed(function() {
    currentPage = 0;
    startSound.play();
    mySound.stop();
  });
  page1 = createButton("Start");
  page1.position(90, 300);
  page1.mousePressed(function() {
    currentPage = 1;
    //MUSIC HERE
    mySound.setVolume(0.1);
    mySound.play();
    startSound.stop();
  });
  page2 = createButton("Instructions");
  page2.position(60, 350);
  page2.mousePressed(function() {
    currentPage = 2;
    mySound.stop();
  });



  page0.hide();
  page1.hide();
  page2.hide();

  /*
  page0.show();
  page1.show();
  page2.show();
  */



  //EGG - veggie 1 - STEP 1
  //var egg = loadImage("Assets/Veggies/Egg.png");
  eggSprite = createSprite(260, -60);
  eggSprite.addImage(eggImage);

  //SHRIMP - veggie 2
  shrimpSprite = createSprite(460, -560);
  shrimpSprite.addImage(shrimpImage);

  //PORK - veggie 3
  porkSprite = createSprite(800, -1060);
  porkSprite.addImage(porkImage);

  //BROCCOLI - veggie 4
  broccoliSprite = createSprite(960, -1560);
  broccoliSprite.addImage(broccoliImage);

  //MUSHROOM - veggie 5
  mushroomSprite = createSprite(260, -1900);
  mushroomSprite.addImage(mushroomImage);

  //NOODLES - veggie 6
  noodleSprite = createSprite(960, -2560);
  noodleSprite.addImage(noodleImage);

  //NARUTO - veggie 7
  narutoSprite = createSprite(120, -3060);
  narutoSprite.addImage(narutoImage);

  //FISH - enemy 1
  fishSprite = createSprite(620, -80);
  fishSprite.addImage(fishImage);

  //BUG - enemy 2
  bugSprite = createSprite(730, -680);
  bugSprite.addImage(bugImage);

  //SHELL - enemy 3
  shellSprite = createSprite(110, -1280);
  shellSprite.addImage(shellImage);

  //SODA - enemy 4
  sodaSprite = createSprite(830, -2280);
  sodaSprite.addImage(sodaImage);

  img = loadImage("Assets/Character/Character.png");
  imageSprite = createSprite(160, 560);
  //imageSprite.addImage(img);

  imageSprite.addAnimation('blinking', 'Assets/Character/Character0.png', 'Assets/Character/Character1.png', 'Assets/Character/Character2.png', 'Assets/Character/Character3.png', 'Assets/Character/Character4.png', 'Assets/Character/Character5.png', 'Assets/Character/Character6.png', 'Assets/Character/Character7.png', 'Assets/Character/Character8.png', 'Assets/Character/Character9.png', 'Assets/Character/Character10.png', 'Assets/Character/Character11.png', 'Assets/Character/Character12.png', 'Assets/Character/Character13.png', 'Assets/Character/Character14.png', 'Assets/Character/Character15.png');
}

function draw() {

  if (currentPage == 0) {
    image(startScreen, 0, 0);

    // use this as a reference to go back from instructions to start page or start the game
    var distance = dist(mouseX, mouseY, 250, 595);

    if (distance < 125) {
      image(startHover, 45, 500);
      if (mouseIsPressed == true) {
        currentPage = 1;
      }
    } else {
      image(startButton, 45, 500);
    }


    var secondDistance = dist(mouseX, mouseY, 950, 575);
    if (secondDistance < 150) {
      image(howHover, 770, 470);
      if (mouseIsPressed == true) {
        currentPage = 2;
      }

    } else {
      image(howButton, 770, 470);
    }

    //Used this ellipse to find the center points of your images
    //ellipse(250, 595,10,10);



  } else if (currentPage == 1) {
    background("red");
    image(bgBlurry, 0, 0);

    //if mouse is to the left
    if (mouseX < imageSprite.position.x - 10) {
      imageSprite.changeAnimation('blinking');
      //flip horizontally
      imageSprite.mirrorX(-1);
      //negative x velocity: move left
      imageSprite.velocity.x = -3;
    } else if (mouseX > imageSprite.position.x + 10) {
      imageSprite.changeAnimation('blinking');
      //unflip
      imageSprite.mirrorX(1);
      imageSprite.velocity.x = 3;
    } else {
      //if close to the mouse, don't move
      imageSprite.changeAnimation('blinking');
      imageSprite.velocity.x = 0;
    }

    //STEP 2
    //when the egg overlaps the waitress then it toggles a variable that determines that the waitress caught the egg
    // these patterns below have to be repeated for every ingredient
    if (imageSprite.overlap(eggSprite) == true) {
      //eggCaught declared abaove
      // if you add this before every caught == true it plays once but once caught becomes true it wont play the sound again
      if (eggCaught == false) {
        popSound.play();
      }
      eggCaught = true;


    } else {
      //moves the egg down the screen
      eggSprite.velocity.y = 3;

    }

    //if the egg goes passed the height it resets back to the top

    if (eggSprite.position.y > height) {
      eggSprite.position.y = random(-300, -100);
      eggSprite.position.x = random(0, width);
    }

    //SHRIMP - VEGGIE 2
    if (imageSprite.overlap(shrimpSprite) == true) {
      if (shrimpCaught == false) {
        popSound.play();
      }
      shrimpCaught = true;
    } else {
      shrimpSprite.velocity.y = 3;

    }
    if (shrimpSprite.position.y > height) {
      shrimpSprite.position.y = random(-300, -100);
      shrimpSprite.position.x = random(0, width);
    }

    //PORK - VEGGIE 3
    if (imageSprite.overlap(porkSprite) == true) {
      if (porkCaught == false) {
        popSound.play();
      }
      porkCaught = true;
    } else {
      porkSprite.velocity.y = 4;

    }
    if (porkSprite.position.y > height) {
      porkSprite.position.y = random(-300, -100);
      porkSprite.position.x = random(0, width);
    }

    //BROCCOLI - VEGGIE 4
    if (imageSprite.overlap(broccoliSprite) == true) {
      if (broccoliCaught == false) {
        popSound.play();
      }
      broccoliCaught = true;
    } else {
      broccoliSprite.velocity.y = 3;

    }
    if (broccoliSprite.position.y > height) {
      broccoliSprite.position.y = random(-300, -100);
      broccoliSprite.position.x = random(0, width);
    }

    //MUSHROOM - VEGGIE 5
    if (imageSprite.overlap(mushroomSprite) == true) {
      if (mushroomCaught == false) {
        popSound.play();
      }
      mushroomCaught = true;
    } else {
      mushroomSprite.velocity.y = 4;

    }
    if (mushroomSprite.position.y > height) {
      mushroomSprite.position.y = random(-300, -100);
      mushroomSprite.position.x = random(0, width);
    }

    //NOODLE - VEGGIE 6
    if (imageSprite.overlap(noodleSprite) == true) {
      if (noodleCaught == false) {
        popSound.play();
      }
      noodleCaught = true;
    } else {
      noodleSprite.velocity.y = 3;

    }
    if (noodleSprite.position.y > height) {
      noodleSprite.position.y = random(-300, -100);
      noodleSprite.position.x = random(0, width);
    }

    //NARUTO - VEGGIE 6
    if (imageSprite.overlap(narutoSprite) == true) {
      if (narutoCaught == false) {
        popSound.play();
      }
      narutoCaught = true;
    } else {
      narutoSprite.velocity.y = 4;

    }
    if (narutoSprite.position.y > height) {
      narutoSprite.position.y = random(-300, -100);
      narutoSprite.position.x = random(0, width);
    }

    //FISH - ENEMY 1
    if (imageSprite.overlap(fishSprite) == true) {
      fishCaught = true;
    } else {
      fishSprite.velocity.y = 2;

    }
    if (fishSprite.position.y > height) {
      fishSprite.position.y = random(-300, -100);
      fishSprite.position.x = random(0, width);
    }

    //BUG - ENEMY 2
    if (imageSprite.overlap(bugSprite) == true) {
      bugCaught = true;
    } else {
      bugSprite.velocity.y = 3;

    }
    if (bugSprite.position.y > height) {
      bugSprite.position.y = random(-300, -100);
      bugSprite.position.x = random(0, width);
    }

    //SHELL - ENEMY 3
    if (imageSprite.overlap(shellSprite) == true) {
      shellCaught = true;
    } else {
      shellSprite.velocity.y = 3;

    }
    if (shellSprite.position.y > height) {
      shellSprite.position.y = random(-300, -100);
      shellSprite.position.x = random(0, width);
    }

    //SODA - ENEMY 4
    if (imageSprite.overlap(sodaSprite) == true) {
      sodaCaught = true;
    } else {
      sodaSprite.velocity.y = 3;

    }
    if (sodaSprite.position.y > height) {
      sodaSprite.position.y = random(-300, -100);
      sodaSprite.position.x = random(0, width);
    }

    image(barArray[0], 200, 10);
    drawSprites();

    //STEP 3
    //When the egg is caugh draw a check mark and make the eggs position the location of the waitress/bowl
    if (eggCaught == true) {
      textSize(32);
      text("✔", 255, 55);

      // Sets the position of the egg to the bowl
      eggSprite.position.y = imageSprite.position.y - 60;

      // Depending where she is facing the egg will move properly with the bowl
      if (imageSprite.velocity.x == 3) {
        eggSprite.position.x = imageSprite.position.x + 80;
      }

      if (imageSprite.velocity.x == -3) {
        eggSprite.position.x = imageSprite.position.x - 80;
      }

      //popSound.play();
    }

    //SHRIMP - VEGGIE 2
    if (shrimpCaught == true) {
      textSize(32);
      text("✔", 325, 55);

      // Sets the position of the egg to the bowl
      shrimpSprite.position.y = imageSprite.position.y - 60;

      // Depending where she is facing the egg will move properly with the bowl
      if (imageSprite.velocity.x == 3) {
        shrimpSprite.position.x = imageSprite.position.x + 90;
      }

      if (imageSprite.velocity.x == -3) {
        shrimpSprite.position.x = imageSprite.position.x - 90;
      }

    }

    //PORK - VEGGIE 3
    if (porkCaught == true) {
      textSize(32);
      text("✔", 415, 55);

      // Sets the position of the egg to the bowl
      porkSprite.position.y = imageSprite.position.y - 60;

      // Depending where she is facing the egg will move properly with the bowl
      if (imageSprite.velocity.x == 3) {
        porkSprite.position.x = imageSprite.position.x + 90;
      }

      if (imageSprite.velocity.x == -3) {
        porkSprite.position.x = imageSprite.position.x - 90;
      }

    }

    //BROCCOLI - VEGGIE 4
    if (broccoliCaught == true) {
      textSize(32);
      text("✔", 495, 55);

      // Sets the position of the egg to the bowl
      broccoliSprite.position.y = imageSprite.position.y - 60;

      // Depending where she is facing the egg will move properly with the bowl
      if (imageSprite.velocity.x == 3) {
        broccoliSprite.position.x = imageSprite.position.x + 60;
      }

      if (imageSprite.velocity.x == -3) {
        broccoliSprite.position.x = imageSprite.position.x - 60;
      }

    }
    //MUSHROOM - VEGGIE 5
    if (mushroomCaught == true) {
      textSize(32);
      text("✔", 575, 55);

      // Sets the position of the egg to the bowl
      mushroomSprite.position.y = imageSprite.position.y - 60;

      // Depending where she is facing the egg will move properly with the bowl
      if (imageSprite.velocity.x == 3) {
        mushroomSprite.position.x = imageSprite.position.x + 90;
      }

      if (imageSprite.velocity.x == -3) {
        mushroomSprite.position.x = imageSprite.position.x - 90;
      }

    }

    //NOODLE - VEGGIE 6
    if (noodleCaught == true) {
      textSize(32);
      text("✔", 683, 55);

      // Sets the position of the egg to the bowl
      noodleSprite.position.y = imageSprite.position.y - 60;

      // Depending where she is facing the egg will move properly with the bowl
      if (imageSprite.velocity.x == 3) {
        noodleSprite.position.x = imageSprite.position.x + 80;
      }

      if (imageSprite.velocity.x == -3) {
        noodleSprite.position.x = imageSprite.position.x - 80;
      }

    }

    //NARUTO - VEGGIE 7
    if (narutoCaught == true) {
      textSize(32);
      text("✔", 783, 55);

      // Sets the position of the egg to the bowl
      narutoSprite.position.y = imageSprite.position.y - 60;

      // Depending where she is facing the egg will move properly with the bowl
      if (imageSprite.velocity.x == 3) {
        narutoSprite.position.x = imageSprite.position.x + 60;
      }

      if (imageSprite.velocity.x == -3) {
        narutoSprite.position.x = imageSprite.position.x - 60;
      }

    }

    //YOU WIN
    if (shrimpCaught == true && eggCaught == true && broccoliCaught == true && porkCaught == true && noodleCaught == true && narutoCaught == true && mushroomCaught == true) {
      image(youWin, 0, 0);
      winSound.plays(1);
      shellSprite.velocity.y = 0;
      bugSprite.velocity.y = 0;
      sodaSprite.velocity.y = 0;
      fishSprite.velocity.y = 0;
      imageSprite.velocity.x = 0;
      //set all the bad guy velocities to zero
      // or you can reset them back to the top of the screen
    }

    //FISH
    if (fishCaught == true) {
      image(gameOver, 0, 0);
      image(tryButton, 230, 535)
      popSound.stop();
      shellSprite.velocity.y = 0;
      bugSprite.velocity.y = 0;
      sodaSprite.velocity.y = 0;
      fishSprite.velocity.y = 0;
      imageSprite.velocity.x = 0;

      // change the graphic for game over so you have an area for try again
      if(mouseIsPressed == true){
      fishCaught = false;
      //reset all positions and all conditions for all of the things
      fishSprite.position.y = random(-300, -100);
      fishSprite.position.x = random(0, width);

      eggCaught = false;
      eggSprite.position.y = random(-400, -800);
      eggSprite.position.x = random(0, width);

      shrimpCaught = false;
      shrimpSprite.position.y = random(-900, -700);
      shrimpSprite.position.x = random(0, width);

      porkCaught = false;
      porkSprite.position.y = random(-700, -900);
      porkSprite.position.x = random(0, width);

      broccoliCaught = false;
      broccoliSprite.position.y = random(-600, -300);
      broccoliSprite.position.x = random(0, width);

      mushroomCaught = false;
      mushroomSprite.position.y = random(-300, -400);
      mushroomSprite.position.x = random(0, width);

      noodleCaught = false;
      noodleSprite.position.y = random(-1200, -200);
      noodleSprite.position.x = random(0, width);

      narutoCaught = false;
      narutoSprite.position.y = random(-1000, -900);
      narutoSprite.position.x = random(0, width);

      bugCaught = false;
      bugSprite.position.y = random(-800, -800);
      bugSprite.position.x = random(0, width);

      shellCaught = false;
      shellSprite.position.y = random(-600, -600);
      shellSprite.position.x = random(0, width);

      sodaCaught = false;
      sodaSprite.position.y = random(-400, -150);
      sodaSprite.position.x = random(0, width);
      }

    }

    //BUG
    if (bugCaught == true) {
      image(gameOver, 0, 0);
      image(tryButton, 230, 535)
      popSound.stop();
      shellSprite.velocity.y = 0;
      bugSprite.velocity.y = 0;
      sodaSprite.velocity.y = 0;
      fishSprite.velocity.y = 0;
      imageSprite.velocity.x = 0;

      // change the graphic for game over so you have an area for try again
      if(mouseIsPressed == true){
      fishCaught = false;
      //reset all positions and all conditions for all of the things
      fishSprite.position.y = random(-300, -100);
      fishSprite.position.x = random(0, width);

      eggCaught = false;
      eggSprite.position.y = random(-400, -800);
      eggSprite.position.x = random(0, width);

      shrimpCaught = false;
      shrimpSprite.position.y = random(-900, -700);
      shrimpSprite.position.x = random(0, width);

      porkCaught = false;
      porkSprite.position.y = random(-700, -900);
      porkSprite.position.x = random(0, width);

      broccoliCaught = false;
      broccoliSprite.position.y = random(-600, -300);
      broccoliSprite.position.x = random(0, width);

      mushroomCaught = false;
      mushroomSprite.position.y = random(-300, -400);
      mushroomSprite.position.x = random(0, width);

      noodleCaught = false;
      noodleSprite.position.y = random(-1200, -200);
      noodleSprite.position.x = random(0, width);

      narutoCaught = false;
      narutoSprite.position.y = random(-1000, -900);
      narutoSprite.position.x = random(0, width);

      bugCaught = false;
      bugSprite.position.y = random(-800, -800);
      bugSprite.position.x = random(0, width);

      shellCaught = false;
      shellSprite.position.y = random(-600, -600);
      shellSprite.position.x = random(0, width);

      sodaCaught = false;
      sodaSprite.position.y = random(-400, -150);
      sodaSprite.position.x = random(0, width);
      }

    }

    //SHELL
    if (shellCaught == true) {
      image(gameOver, 0, 0);
      image(tryButton, 230, 535)
      popSound.stop();
      shellSprite.velocity.y = 0;
      bugSprite.velocity.y = 0;
      sodaSprite.velocity.y = 0;
      fishSprite.velocity.y = 0;
      imageSprite.velocity.x = 0;

      // change the graphic for game over so you have an area for try again
      if(mouseIsPressed == true){
      fishCaught = false;
      //reset all positions and all conditions for all of the things
      fishSprite.position.y = random(-300, -100);
      fishSprite.position.x = random(0, width);

      eggCaught = false;
      eggSprite.position.y = random(-400, -800);
      eggSprite.position.x = random(0, width);

      shrimpCaught = false;
      shrimpSprite.position.y = random(-900, -700);
      shrimpSprite.position.x = random(0, width);

      porkCaught = false;
      porkSprite.position.y = random(-700, -900);
      porkSprite.position.x = random(0, width);

      broccoliCaught = false;
      broccoliSprite.position.y = random(-600, -300);
      broccoliSprite.position.x = random(0, width);

      mushroomCaught = false;
      mushroomSprite.position.y = random(-300, -400);
      mushroomSprite.position.x = random(0, width);

      noodleCaught = false;
      noodleSprite.position.y = random(-1200, -200);
      noodleSprite.position.x = random(0, width);

      narutoCaught = false;
      narutoSprite.position.y = random(-1000, -900);
      narutoSprite.position.x = random(0, width);

      bugCaught = false;
      bugSprite.position.y = random(-800, -800);
      bugSprite.position.x = random(0, width);

      shellCaught = false;
      shellSprite.position.y = random(-600, -600);
      shellSprite.position.x = random(0, width);

      sodaCaught = false;
      sodaSprite.position.y = random(-400, -150);
      sodaSprite.position.x = random(0, width);
      }

    }

    //SODA
    if (sodaCaught == true) {
      image(gameOver, 0, 0);
      image(tryButton, 230, 535)
      popSound.stop();
      shellSprite.velocity.y = 0;
      bugSprite.velocity.y = 0;
      sodaSprite.velocity.y = 0;
      fishSprite.velocity.y = 0;
      imageSprite.velocity.x = 0;

      // change the graphic for game over so you have an area for try again
      if(mouseIsPressed == true){
      fishCaught = false;
      //reset all positions and all conditions for all of the things
      fishSprite.position.y = random(-300, -900);
      fishSprite.position.x = random(0, width);

      eggCaught = false;
      eggSprite.position.y = random(-200, -100);
      eggSprite.position.x = random(0, width);

      shrimpCaught = false;
      shrimpSprite.position.y = random(-200, -400);
      shrimpSprite.position.x = random(0, width);

      porkCaught = false;
      porkSprite.position.y = random(-500, -300);
      porkSprite.position.x = random(0, width);

      broccoliCaught = false;
      broccoliSprite.position.y = random(-900, -300);
      broccoliSprite.position.x = random(0, width);

      mushroomCaught = false;
      mushroomSprite.position.y = random(-100, -200);
      mushroomSprite.position.x = random(0, width);

      noodleCaught = false;
      noodleSprite.position.y = random(-1100, -200);
      noodleSprite.position.x = random(0, width);

      narutoCaught = false;
      narutoSprite.position.y = random(-1300, -200);
      narutoSprite.position.x = random(0, width);

      bugCaught = false;
      bugSprite.position.y = random(-1000, -900);
      bugSprite.position.x = random(0, width);

      shellCaught = false;
      shellSprite.position.y = random(-800, -800);
      shellSprite.position.x = random(0, width);

      sodaCaught = false;
      sodaSprite.position.y = random(-600, -600);
      sodaSprite.position.x = random(0, width);
      }

    }

  }if (currentPage == 2) {
    image(instructions, 0, 0);
    mySound.stop();
    popSound.stop();
    //image(backButton, 230, 130);

    var distance = dist(mouseX, mouseY, 230, 135);

    if (distance < 125) {
      image(backButton, 230, 135);
      if (mouseIsPressed == true) {
        currentPage = 0;
      }
    } else {
      image(backButton, 230, 135);
    }



}
}
