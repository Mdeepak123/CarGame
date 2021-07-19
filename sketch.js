var gameState = 0;

var playerCar, playerCarImage, track;

var car, carImg1, carImg2, carImg3, carImg4, carImg5;
var score=0;
var backgroundImg;

function preload(){

  playerCarImage = loadImage("Cars/car_red_1.png");

  carImg1 = loadImage("Cars/car_black_3.png");
  carImg2 = loadImage("Cars/car_green_1.png");
  carImg3 = loadImage("Cars/car_yellow_5.png");
  carImg4 = loadImage("Cars/car_blue_3.png");
  carImg5 = loadImage("Cars/car_blue_2.png");

  backgroundImg = loadImage("Cars/1.webp");
}


function setup() {
  createCanvas(500,500);

  road = createSprite(250,250, 600, 600);
  road.addImage(backgroundImg);

  playerCar = createSprite(250,400,20,20);
  playerCar.addImage(playerCarImage);
  playerCar.scale = 0.7;

  carGroup = new Group();
  
}

function draw() {
  background("white");

  if(gameState ===0){
    textSize(20)
    text("Press Space to start game", 150, 100);
    text("Use Right and left arrow keys to move", 150,125);
    text("Use Down arrow key to stop moving", 150,150);



    if(keyDown("space")){
      gameState = 1;
    }
  }

  if(gameState ===1){
    
    movement();
    drawSprites();

    if(frameCount%100 === 0){

      car = createSprite(Math.round(random(150,350)), 0);
      car.scale = 0.7;
      car.velocityY = 5;

      score = score+Math.round(getFrameRate()/60)
      text("Score:"+score, 10,10);
  
      rand2 = Math.round(random(1,5));
      switch(rand2){
        case 1: car.addImage(carImg1);
                break;
        case 2: car.addImage(carImg2);
                break; 
        case 3: car.addImage(carImg3);
                break;
        case 4: car.addImage(carImg4);
                break;
        case 5: car.addImage(carImg5);
                break;
        default: break;
        }
        carGroup.add(car);
    }

    


    if(playerCar.isTouching(carGroup)){

      gameState = 2;
    }
  }

  if(gameState === 2){
    
    car.destroy();
    playerCar.destroy();
    road.destroy();
  
    textSize(20);
    text("Game end", 250, 250);
    text("Score:"+score, 250,350);

  }
}



function movement(){

  if(keyIsDown(RIGHT_ARROW)){
    playerCar.velocityX = 2;
  }

  if(keyIsDown(LEFT_ARROW)){
    playerCar.velocityX= -2;
  }

  if(keyIsDown(DOWN_ARROW)){
    playerCar.velocityX= 0;
  }


}

function spawnOtherCars(){
  
 
}

function carPos(){
  rand1 = Math.round(random(1,3));
  switch(rand1){

    case 1: car.x = 150;
            break;
    case 2: car.x = 250;
            break;
    case 3: car.x = 350; 
            break;
    default: break;
  }
}