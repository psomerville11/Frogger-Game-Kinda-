/* global createCanvas, colorMode, HSB */

let backgroundColor, frogX, frogY, score, lives, gameIsOver, car1X, car1Y, car1V;

function setup() {
  // Canvas & color settings
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  
  //Position of the Green Circle 
  frogX = width/2;
  frogY = 450;
  
  
  score = 0;
  lives = 3;
  gameIsOver = false;
  
  // Car's X pos, Y pos, and velocity
  car1X = 0;
  car1Y = 100;
  car1V = 5;
  
  //Car's 2x pos, 2Y Pos, and velocity
  car2X = 0
  car2Y = 350
  car2V = 6
  
  car3X = 0
  car3Y = 250
  car3V = -4
  
  car4X = 0
  car4Y = 200
  car4V = -3
  
}

function draw() {
  background(backgroundColor);
  // Code for gold goal line
  fill(60, 80, 80);
  rect(0, 0, width, 50);
  // Code to display Frog
  fill(120, 80, 80);
  ellipse(frogX, frogY, 20);
  moveCars();
  drawCars();
  checkCollisions();
  checkWin();
  displayScores();
}

function keyPressed() {
  //down arrow, left arrow, right arrow 
  if (keyCode === UP_ARROW) {
    frogY -= 10;
  } else if (keyCode === DOWN_ARROW){
    frogY += 10;
  } else if (keyCode === LEFT_ARROW){
      frogX -= 10;
  } else if (keyCode=== RIGHT_ARROW){
      frogX += 10;
  } if (keyCode === ENTER){
  setup();
} 
}

function moveCars() {
  // Move the car
  car1X += car1V;
  car2X += car2V;
  car3X += car3V;
  car4X += car4V;
  
  // Reset if it moves off screen
  if (car1X > width){
    car1X = -40;
  } if (car2X > width){
    car2X = -40;
}if (car3X < 0){
     car3X = width - 40
} if (car4X < 0){
     car4X = width - 40
 }
}
function drawCars() {
  // Code for car 1
  fill(0, 80, 80);
  rect(car1X, car1Y, 40, 30);
  // Code for additional cars
  fill('green')
  rect(car2X, car2Y, 40,30);
  fill('orange')
  rect(car3X, car3Y, 40, 30);
  fill('blue')
  rect(car4X, car4Y, 40,30); 
}

function checkCollisions() {
  // If the frog collides with the car, reset the frog and subtract a life.
  collided = collideRectCircle(car1X,car1Y, 40, 30, frogX, frogY, 20);
  collided2 = collideRectCircle(car2X,car2Y, 40, 30, frogX, frogY, 20);
  collided3 = collideRectCircle(car3X,car3Y, 40, 30, frogX, frogY, 20);
  collided4 = collideRectCircle(car4X, car4Y, 40,30, frogX, frogY, 20);
  
  
  //reset frog
  if(collided) {
    frogX = width/2
    frogY = 450;
    lives--;
    
  }
  if (collided2){
    frogX = width/2
    frogY = 450;
    lives--}
  
  if (collided3){
    frogX = width/2
    frogY = 450;
    lives--}
  
  if (collided4){
    frogX = width/2
    frogY = 450;
    lives--}

 if(lives == 0){
    gameIsOver = true;
  }
}


function checkWin() {
  // If the frog makes it into the yellow gold zone, increment the score
  // and move the frog back down to the bottom.
  if(frogY <= 50+10){
   score++; 
   frogX = width/2;
   frogY = 450;
   }
 }


function displayScores() {
  textSize(12);
  fill(0);
  // Display Lives
  text(`Lives: ${lives}`, 10, 20);
  // Display Score
  text(`Score: ${score}`,10,40)
  // Display game over message if the game is over
  if (gameIsOver){
     textSize(60); 
     text('GAME OVER', width/6, height/2);  
  }
}