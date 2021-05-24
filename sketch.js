var gameState = 0;
var player
var playerSelection
var screen1,screen2, screen3
var bg
var player1, player2, player3, player4
var weapon 

function preload() {
  screen1= loadImage("screen1.png")
  screen2= loadImage("screen2.png")
  screen3= loadImage("screen3.jpg")
  player1 = loadImage("player1.png")
  player2 = loadImage("player2.png")
  player3 = loadImage("player3.png")
  player4 = loadImage("player4.png")
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  bg = createSprite(displayWidth/2, displayHeight/2)
  bg.addImage(screen3)
  bg.visible = false;

  arrow1 = createSprite(1433, -888, 20, 20)
  arrow2 = createSprite(867, -628, 20, 20)
  arrow3 = createSprite(1032, -93, 20, 20)

  var weapon = createSprite(0,0,5,5)
}
function draw() {
  
  if(gameState === 0) {
    background(screen1);
    textSize(20)
    fill("white")
    text(mouseX +","+ mouseY,mouseX,mouseY)
    if(keyDown("s")){
      gameState = 1
    }
  }
   
  if(gameState === 1) {
     background(screen2)
     textSize(20)
    fill("white")
    text(mouseX +","+ mouseY,mouseX,mouseY)
    if(keyDown("1")) {
      playerSelection = 1
    }
    if(keyDown("2")) {
      playerSelection = 2
    }
    if(keyDown("3")) {
      playerSelection = 3
    }
    if(playerSelection == 1) {
      fill("yellow")
      circle(235, 552, 50)
      player = createSprite(1992, -943, 50, 50)
      player.debug = true
      player.addImage(player1)
      player.rotateToDirection = true
      player.visible=false
      player.scale = 0.1
    }
    if(playerSelection == 2) {
      fill("yellow")
      circle(542, 542, 50)
      player = createSprite(1992, -943, 50, 50)
      player.addImage(player2)
      player.rotateToDirection = true
      player.visible=false
      player.scale = 0.1
    }
    if(playerSelection == 3) {
      fill("yellow")
      circle(854, 566, 50)
      player = createSprite(1992, -943, 50, 50)
      player.addImage(player3)
      player.rotateToDirection = true
      player.visible=false
      player.scale = 0.1
    }
    }
    if(keyDown("p")) {
      console.log("label 2")
      gameState = 2
    }
  
    if(gameState === 2){
     // background("orange")
      bg.visible = true;
      textSize(20)
      fill("white")
      text(mouseX +","+ mouseY,mouseX,mouseY)
      player.visible = true;

      shoot()
      
      if(keyDown("up_arrow")) {
        player.y = player.y - 5
        console.log("label")
        player.rotation = 180
        weapon.velocityY = -3
        weapon.velocityX = 0
      }
      if(keyDown("down_arrow")) {
        player.y = player.y + 5
        player.rotation = 0
        weapon.velocityY = 3
        weapon.velocityX = 0
      }
      if(keyDown("right_arrow")) {
        player.x = player.x + 5
        player.rotation = -90
        weapon.velocityY = 0
        weapon.velocityX = 3
      }
      if(keyDown("left_arrow")) {
        player.x = player.x - 5
        player.rotation = 90
        weapon.velocityY = 0
        weapon.velocityX = -3
      }
      camera.position.x = player.x
      camera.position.y = player.y
      
      drawSprites();
  textSize(20)
    fill("white")
    text(player.x +","+ player.y,player.x, player.y)
    }
  
    }
    function shoot() {
      if(keyDown("space")){
        var weapon = createSprite(player.x, player.y, 20, 20)
        weapon.shapeColor = "red"
        weapon.velocityX = 3
        weapon.rotateToDirection = true
      }
    }
