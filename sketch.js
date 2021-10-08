var fish,fishImage;
var sea;

function preload(){
	fishImage = loadImage("fish.png")
	sea = loadImage("sea Image.jpg")
}
function setup(){
	createCanvas(windowWidth,windowHeight)
	fish = createSprite(100,windowHeight-100,50,50)
	fish.addImage(fishImage)
	fish.scale = 0.3
}
function draw(){
	background(sea)
	drawSprites()
}