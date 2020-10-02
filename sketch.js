//Create variables here
var database,dog2,foodS,foodStock,dog,happyDog;

function preload()
{
  dog1=loadImage("images/dogImg.png");
 dog2=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref('virtual pet');
foodStock.on("value",readStock);
  dog=createSprite(250,250,10,10);
  dog.scale=0.5;
  dog.addImage("i1",dog1);
 
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("i2",dog2);
}
  drawSprites();
 fill("yellow");
 textSize(20); 
 text("FOOD REMAINING:"+foodS,140,20);

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
    database.ref('/').update({
        Food:x
      })
  
    x=x-1;
  
 
}




