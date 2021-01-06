var car , wall;
var speed , weight , deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(200, 200, 50, 50);

  wall = createSprite(700, 200, 80, 200);

  speed =  random(55,90);

  weight =  random(800,1500);

  deformation = round(0.5*weight*speed*speed/22500);

}

function draw() {
  background("black"); 
 
  if(keyDown("space")){
    car.velocityX = speed;
  }

  wall.depth = car.depth;
  car.depth = car.depth + 1;

  drawSprites();

  text("press space to start the car",350,50);
  text("refresh the page to test the next car",330,70);

  if(car.isTouching(wall)){
    text(deformation,370,350);

    car.velocityX = 0;

    if(deformation < 100){
      car.shapeColor = "green";
    }

    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }

    if(deformation > 180){
      car.shapeColor = "red";
    }
  
  }


}