//Create variables here 
/*
var dog, happydog;
var foods,foodStock;
var database;
var Dog;
var feedFood,addFood, fedTime, lastFed;
var FOOD;
var Bedroom, Garden, Washroom;
var milk2;
function preload()
{
  dog = loadImage("images/Dog.png");
  happydog = loadImage("images/happydog.png");
  Bedroom = loadImage("images/virtual pet images/Bed Room.png");
  Garden = loadImage("images/virtual pet images/Garden.png");
  Washroom = loadImage("images/virtual pet images/Wash Room.png")
  milk2 = loadImage("images/Milk.png")
}


function setup() {
  database = firebase.database();
	createCanvas(500,500);



  FOOD = new Food();

  foodStock = database.ref("food");
  foodStock.on("value",readStock);

  Dog = createSprite(250,380,0,0);
  Dog.addImage(dog)
  Dog.scale=0.3;

  feed = new Feed();
  addfood = new AddFood();


  
}


function draw() {  
background(46,139,87)
FOOD.display();
writeStock(foods);

  if(foods == 0){
Dog.addImage(happydog)
milk2.visible = false;
  }
else{
  Dog.addImage(dog)
milk2.visible = true;
}

var readState = database.ref("gameState");
readState.on("value",function(data){
  gameState = data.val();
});

if(gameState === 1){
  Dog.addImage(happydog);
  Dog.scale= 0.175;
  Dog.y = 250;
  }
  
  
  
  if(gameState === 2){
    Dog.addImage(dog);
  Dog.scale= 0.175;
  milk2.visible = false;
  Dog.y = 250;
  }
  
  var Bath = createButton("I want to take a BATH");
  Bath.position(750,300);
  if(Bath.mousePressed(function(){
  gameState = 3;
  database.ref("/").update({
    "gameState":gameState
  })
  }))
  if(gameState === 3){
    Dog.addImage(Washroom)
    Dog.scale = 0.3;
    milk2.visible = false;
  }
  
  
  var Sleep = createButton("I am very TIRED");
  Sleep.position(750,350);
  if(Sleep.mousePressed(function(){
  gameState = 4;
  database.ref("/").update({
    "gameState":gameState
  })
  }))
  if(gameState === 4){
    Dog.addImage(Bedroom)
    Dog.scale = 0.3;
    milk2.visible = false;
  }
  
  
  var Playg = createButton("LETS PLAY!!!!!");
  Playg.position(400,500);
  if(Playg.mousePressed(function(){
  gameState = 5;
  database.ref("/").update({
    "gameState":gameState
  })
  }))
  if(gameState === 5){
  Dog.addImage(Garden);
  Dog.scale = 0.3;
  milk2.visible = false;
  }

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();







  if(gameState!="Hungry"){
hide();
Dog.remove();
  }else{
show()
  }




});
fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : "+ lastFed%12 + " PM", 350,30);
 }else if(lastFed==0){
   text("Last Feed : 12 AM",350,30);
 }else{
   text("Last Feed : "+ lastFed + " AM", 350,30);
 }

  drawSprites();
  textSize(20)
fill("white");
stroke("black");
text("Food:"+foods,230,100);
text("Note: Press up arrow to feed the dog milk!",75,50)


currentTime = hour();
if(currentTime==(lastFed+1)){
update("playing")
Dog.addImage(Garden);
}
else if(currentTime==(lastFed+2)){
  update("sleeping")
  Dog.addImage(Bedroom);

}else if(currentTime==(lastFed+2) && currentTime<=(lastFed+4)){
  update("bathing")
  Dog.addImage(Washroom)
}else{
  update("Hungry")
  Dog.display();
}


}
function readStock(data){
foods=data.val()
FOOD.updateFoodStock(foods);
}
function writeStock(x){
database.ref("/").update({
  food:x
})
}


function update(state){
database.ref("/").update({
  gameState: state
})
}
function show(){
  feed.display();
  addfood.display();
}
function hide(){
  feed.visible = false;
  addfood.visible = false;
}
*/

var dog, happyDog, database, foodS, foodStock
var dogImg, dogHappyImg;
var milk, milkImg;
var gameState;
var bedroom,garden,livingroom,washroom;
var feed,addfood;

function preload(){
  sadDog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
  milkImg = loadImage("images/Milk.png");
  bedroom = loadImage("images/virtual pet images/Bed Room.png");
  garden = loadImage("images/virtual pet images/Garden.png");
  livingroom = loadImage("images/virtual pet images/Living Room.png");
  washroom = loadImage("images/virtual pet images/Wash Room.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  foodObj=new Food();
feed = new Feed();
  addfood = new AddFood();
  dog = createSprite(250,250,10,10);
  dog.addImage(sadDog);
  dog.scale = 0.15;
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(20);
  
  milkBotltle1 = createSprite(140,435,10,10);
  milkBotltle1.addImage(milkImg);
  milkBotltle1.scale = 0.1;



}


function draw() {  
  background("blue")

  foodObj.display();

  writeStock(foodS);
  feed.display();
  addfood.display();
  
  if(foodS == 0){
    dog.addImage(happyDog);
    milkBotltle2.visible=false;
  }else{
    dog.addImage(sadDog);
  }
  var gameStateRef=database.ref('gameState');
  gameStateRef.on('value',function(data){
    gameState = data.val();
  });

  if(gameState===1){
    dog.addImage(happyDog);
    dog.scale=0.1;
    dog.y=250;
  }
  if(gameState===2){
    dog.addImage(sadDog);
    dog.scale=0.1;
    dog.y=250;
  }
  
  var Bath=createButton("I want to take a bath");
  Bath.position(710,125);
  if(Bath.mousePressed(function(){
    gameState=3;
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===3){
    dog.addImage(washroom);
    dog.scale=1;
  }

  var Sleep=createButton("I am tired");
  Sleep.position(710,175);
  if(Sleep.mousePressed(function(){
    gameState=4;
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===4){
    dog.addImage(bedroom);
    dog.scale=1;
  }

  var Play=createButton("Lets play!");
  Play.position(710,225);
  if(Play.mousePressed(function(){
    gameState=5;
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===5){
    dog.addImage(livingroom);
    dog.scale=1;
  }

  var PlayInGarden=createButton("Lets play outside");
  PlayInGarden.position(750,275);
  if(PlayInGarden.mousePressed(function(){
    gameState=6;
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===6){
    dog.y=175;
    dog.addImage(garden);
    dog.scale=1;
  }

  drawSprites();
  textSize(17);
  fill("black");
  text("Bottles left  "+foodS,170,440);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}
