var flag=1
var balcony1, balcony1Image
var balcony2, balcony2Image
var building, buildingImage
var climbLeft, climbLeftImage
var climbRight, climbRightImage
var standing, standingImage
var pauseButton, pauseButtonImage
var playButton, playButtonImage
var resetButton, resetButtonImage
var sky, skyImage
function preload() {
  balcony1Image = loadImage("balcony1.png")
  balcony2Image = loadImage("balcony2.png")
  buildingImage = loadImage("building.png")
  climbleftImage = loadAnimation("climbLeft.png")
  climbRightImage = loadAnimation("climbRight.png")
  standingImage = loadAnimation("standing.png")
  pauseButtonImage = loadImage("pauseButton.png")
  playButtonImage = loadImage("playButton.png")
  resetButton = loadImage("resetButton.png")
  skyImage = loadImage("sky.jpg")
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight - 100);
  player=createSprite(width/2,height/2);
  player.scale=0.4
  player.addAnimation("standing",standingImage)
  player.addAnimation("climbleft",climbleftImage)
  player.addAnimation("climbRight",climbRightImage)
}

function draw() {
  player.velocityY=0
if(keyDown(RIGHT_ARROW)){
  player.changeAnimation("climbRight",climbRightImage)
  player.velocityY=-5
  if(keyDown(LEFT_ARROW)){
    player.changeAnimation("climbleft",climbleftImage)
    player.velocityY=-5
  }
}


  background(skyImage)
  if (background.y > 400) {
    building.velocityY = 1;

    background.y = 300
    

  }
  spawnBuilding()
  drawSprites();
}
function spawnBuilding() {
  if (frameCount % 70 == 0) {
    var building = createSprite(Math.round(random(50,width-50)),  - 200, 50, 50)
    // building.addImage(buildingImage) 
    // building.scale=1.5                 
    var r = Math.round(random(1,2))
    if (flag == 1) {
      building.addImage(buildingImage)
      building.x=300
      building.scale=1.5
      flag=2
      console.log("hello")
    }
    else if (flag == 2) {
      building.addImage(buildingImage)
      building.x=900
      building.scale=1.5
      flag=1
      console.log(building.x)
    }
    // if (r == 3) {
    //   building.addImage(balcony2Image)
        // }
    building.velocityY = +5
  }



  
}

