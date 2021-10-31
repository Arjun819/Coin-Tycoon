gamestate = "play"
var runner, runner_move
var path,currentPath
var wall1, wall2
var enchants,point,grenade,booster

var score = 0
var money = 0
var frame1 = 70
var frame2 = 80
var frame3 = 60
function preload(){
  //pre-load images
  runner_move = loadAnimation("Runner-1.png","Runner-2.png")
  currentPath = loadImage("path.png")
  wall1 = loadImage("line.png")
  wall2 = loadImage("line.png")
  point = loadImage("coin.png")
  grenade = loadImage("bomb.png")
  booster = loadImage("energyDrink.png")
  over = loadImage("gameover.png")
}

function setup(){
  createCanvas(400,450);
 road = createSprite(200,200,400,400)
 road.addImage("path", currentPath)
 road.scale = 1.25
 road.height = 200

 runner = createSprite(200,350,400,400)
 runner.addAnimation("runner",runner_move)
 runner.scale = 0.08
 runner.debug = true
 runner.setCollider("Circle",0,0,2)

 line11 = createSprite(20,200,200,200)
 line11.addImage("wall_1",wall1)
 line11.rotation = 90
 line11.height = background.height
 line11.visible = false

 line12 = createSprite(20,300,200,200)
 line12.addImage("wall_1",wall1)
 line12.rotation = 90
 line12.height = background.height
 line12.visible = false

 line21 = createSprite(380,200,200,200)
 line21.addImage("wall_2",wall2)
 line21.rotation = -90
 line21.height = background.height
 line21.visible = false

 line22 = createSprite(380,300,200,200)
 line22.addImage("wall_2",wall2)
 line22.rotation = -90
 line22.height = background.height
 line22.visible = false

  coin_1_group = new Group()
  coin_2_group = new Group()
  coin_3_group = new Group()

  bomb_1_group = new Group()
  bomb_2_group = new Group()
  bomb_3_group = new Group()

  boost_1_group = new Group()
  boost_2_group = new Group()
  boost_3_group = new Group()

}

function draw() {
  background(0);

  score = frameCount / 2
  // Arrow keys
  if (keyDown("right")) {
     runner.x += 3
  }
  if (keyDown("left")) {
    runner.x -= 3
 }

 road.velocityY = 3
 if(road.y > 405){
    road.y = 200
 }

 // Colide
 runner.collide(line11)
 runner.collide(line12)
 runner.collide(line21)
 runner.collide(line22)

 if(coin_1_group.isTouching(runner)){
   coin_1_group.destroyEach()
   money += 10
 }
 if(coin_2_group.isTouching(runner)){
  coin_2_group.destroyEach()
 money += 10
}
if(coin_3_group.isTouching(runner)){
  coin_3_group.destroyEach()
  money += 10
}
if(runner.isTouching(bomb_1_group)||runner.isTouching(bomb_2_group)||runner.isTouching(bomb_3_group)){
  gamestate = "end"
}
if(gamestate == "end"){
coin_1_group.destroyEach()
coin_1_group.setVelocityYEach(0)

coin_2_group.destroyEach()
coin_2_group.setVelocityYEach(0)

coin_3_group.destroyEach()
coin_3_group.setVelocityYEach(0)

bomb_1_group.destroyEach()
bomb_1_group.setVelocityYEach(0)

bomb_2_group.destroyEach()
bomb_2_group.setVelocityYEach(0)

bomb_3_group.destroyEach()
bomb_3_group.setVelocityYEach(0)

boost_1_group.destroyEach()
boost_1_group.setVelocityYEach(0)

boost_2_group.destroyEach()
boost_2_group.setVelocityYEach(0)

boost_3_group.destroyEach()
boost_3_group.setVelocityYEach(0)

runner.destroy()

  gameover = createSprite(200,200,windowWidth,windowHeight)
  gameover.addImage(over)
  gameover.depth = runner.depth + 2
}

if(gamestate === "play"){
  coinSpawner_1()
  coinSpawner_2()
  coinSpawner_3()
}

drawSprites();
}

function coinSpawner_1(){
  var rand1 = Math.round(random(1,10))
  if(frameCount % frame1 == 0){
switch(rand1){
  case 1: 
  coin1 = createSprite(75,-10,50,50)
  coin1.addImage("enchants", point)
  coin1.velocityY = 3
  coin1.scale = 0.5
  coin1.lifetime = 150
  coin1.debug = true
  coin_1_group.add(coin1)
  break;
  case 2: 
  coin1 = createSprite(75,-10,50,50)
  coin1.addImage("enchants", point)
  coin1.velocityY = 3
  coin1.scale = 0.5
  coin1.lifetime = 150
  coin_1_group.add(coin1)
  break;
  case 3:
   bomb1 = createSprite(75,-10,50,50) 
   bomb1.addImage(grenade)
   bomb1.velocityY = 3
   bomb1.scale = 0.1
   bomb1.lifetime = 150
   bomb_1_group.add(bomb1)
   break;
   case 4: 
   coin1 = createSprite(75,-10,50,50)
   coin1.addImage("enchants", point)
   coin1.velocityY = 3
   coin1.scale = 0.5
   coin1.lifetime = 150
   coin1.debug = true
   coin_1_group.add(coin1)
   break;
   case 5: 
   coin1 = createSprite(75,-10,50,50)
   coin1.addImage("enchants", point)
   coin1.velocityY = 3
   coin1.scale = 0.5
   coin1.lifetime = 150
   coin_1_group.add(coin1)
   break;
   case 6: 
   coin1 = createSprite(75,-10,50,50)
   coin1.addImage("enchants", point)
   coin1.velocityY = 3
   coin1.scale = 0.5
   coin1.lifetime = 150
   coin1.debug = true
   coin_1_group.add(coin1)
   break;
   case 7: 
   coin1 = createSprite(75,-10,50,50)
   coin1.addImage("enchants", point)
   coin1.velocityY = 3
   coin1.scale = 0.5
   coin1.lifetime = 150
   coin_1_group.add(coin1)
   break;
   case 8:
   boost1 = createSprite(75,-10,50,50)
   boost1.addImage(booster)
   boost1.velocityY = 3
   boost1.scale = 0.1
   boost1.lifetime = 150
   boost_1_group.add(boost1)
  break;
  case 9: 
   coin1 = createSprite(75,-10,50,50)
   coin1.addImage("enchants", point)
   coin1.velocityY = 3
   coin1.scale = 0.5
   coin1.lifetime = 150
   coin1.debug = true
   coin_1_group.add(coin1)
   break;
   case 10: 
   coin1 = createSprite(75,-10,50,50)
   coin1.addImage("enchants", point)
   coin1.velocityY = 3
   coin1.scale = 0.5
   coin1.lifetime = 150
   coin_1_group.add(coin1)
   break;
   
   default: break;
}
  }
}
function coinSpawner_2(){
  var rand2 = Math.round(random(1,10))
  if(frameCount % frame2 == 0){
    switch(rand2){
case 1:
  coin2 = createSprite(200,-10,50,50)
  coin2.addImage("enchants", point)
  coin2.velocityY = 3
  coin2.scale = 0.5
  coin2.lifetime = 150
  coin_2_group.add(coin2)
  break;
  case 2:
  coin2 = createSprite(200,-10,50,50)
  coin2.addImage("enchants", point)
  coin2.velocityY = 3
  coin2.scale = 0.5
  coin2.lifetime = 150
  coin_2_group.add(coin2)
  break;
  case 3:
    bomb2 = createSprite(200,-10,50,50)
    bomb2.addImage(grenade)
    bomb2.velocityY = 3
    bomb2.scale = 0.1
    bomb2.lifetime = 150
    bomb_2_group.add(bomb2)
    break;
    case 4:
  coin2 = createSprite(200,-10,50,50)
  coin2.addImage("enchants", point)
  coin2.velocityY = 3
  coin2.scale = 0.5
  coin2.lifetime = 150
  coin_2_group.add(coin2)
  break;
  case 5:
  coin2 = createSprite(200,-10,50,50)
  coin2.addImage("enchants", point)
  coin2.velocityY = 3
  coin2.scale = 0.5
  coin2.lifetime = 150
  coin_2_group.add(coin2)
  break;
  case 6:
  coin2 = createSprite(200,-10,50,50)
  coin2.addImage("enchants", point)
  coin2.velocityY = 3
  coin2.scale = 0.5
  coin2.lifetime = 150
  coin_2_group.add(coin2)
  break;
  case 7:
  coin2 = createSprite(200,-10,50,50)
  coin2.addImage("enchants", point)
  coin2.velocityY = 3
  coin2.scale = 0.5
  coin2.lifetime = 150
  coin_2_group.add(coin2)
  break;
  case 8:
  boost2 = createSprite(200,-10,50,50)
  boost2.addImage(booster)
  boost2.velocityY = 3
  boost2.scale = 0.1
  boost2.lifetime = 150
  boost_2_group.add(boost2)
  break
  case 9:
  coin2 = createSprite(200,-10,50,50)
  coin2.addImage("enchants", point)
  coin2.velocityY = 3
  coin2.scale = 0.5
  coin2.lifetime = 150
  coin_2_group.add(coin2)
  break;
  case 10:
  coin2 = createSprite(200,-10,50,50)
  coin2.addImage("enchants", point)
  coin2.velocityY = 3
  coin2.scale = 0.5
  coin2.lifetime = 150
  coin_2_group.add(coin2)
  break;
  default: break
    }
  }
}
function coinSpawner_3(){
  var rand3 = Math.round(random(1,10))
  if(frameCount % frame3 == 0){
    switch(rand3){
      case 1:
      coin3 = createSprite(335,-10,50,50)
      coin3.addImage("enchants", point)
      coin3.velocityY = 3
      coin3.scale = 0.5
      coin3.lifetime = 150
      coin_3_group.add(coin3)
      break;
      case 2:
      coin3 = createSprite(335,-10,50,50)
      coin3.addImage("enchants", point)
      coin3.velocityY = 3
      coin3.scale = 0.5
      coin3.lifetime = 150
      coin_3_group.add(coin3)
      break;
      case 3:
      bomb3 = createSprite(335,-10,50,50)
      bomb3.addImage(grenade)
      bomb3.velocityY = 3
      bomb3.scale = 0.1
      bomb3.lifetime = 150
      bomb_3_group.add(bomb3)
        break;
    case 4:
      coin3 = createSprite(335,-10,50,50)
      coin3.addImage("enchants", point)
      coin3.velocityY = 3
      coin3.scale = 0.5
      coin3.lifetime = 150
      coin_3_group.add(coin3)
      break;
      case 5:
      coin3 = createSprite(335,-10,50,50)
      coin3.addImage("enchants", point)
      coin3.velocityY = 3
      coin3.scale = 0.5
      coin3.lifetime = 150
      coin_3_group.add(coin3)
      break;
      case 6:
      coin3 = createSprite(335,-10,50,50)
      coin3.addImage("enchants", point)
      coin3.velocityY = 3
      coin3.scale = 0.5
      coin3.lifetime = 150
      coin_3_group.add(coin3)
      break;
      case 7:
      coin3 = createSprite(335,-10,50,50)
      coin3.addImage("enchants", point)
      coin3.velocityY = 3
      coin3.scale = 0.5
      coin3.lifetime = 150
      coin_3_group.add(coin3)
      break;
      case 8:
      boost3 = createSprite(335,-10,50,50)
      boost3.addImage(booster)
      boost3.velocityY = 3
      boost3.scale = 0.1
      boost3.lifetime = 150
      boost_3_group.add(boost3)
      break;
      case 9:
      coin3 = createSprite(335,-10,50,50)
      coin3.addImage("enchants", point)
      coin3.velocityY = 3
      coin3.scale = 0.5
      coin3.lifetime = 150
      coin_3_group.add(coin3)
      break;
      case 10:
      coin3 = createSprite(335,-10,50,50)
      coin3.addImage("enchants", point)
      coin3.velocityY = 3
      coin3.scale = 0.5
      coin3.lifetime = 150
      coin_3_group.add(coin3)
      break;
        default: break
    }
  }
}
