var Ball, database;
var position;


function setup(){

  database = firebase.database();
  createCanvas(500,500);
  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";


}

function draw(){
  background("white");
  readPosition();
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
 database.ref("ball/position").update({
   x:Ball.x+x,y:Ball.y+y
 })
}

function readPosition(data)
{
 database.ref("ball/position").on("value",function(data){
   position = data.val();
   Ball.x = position.x;
   Ball.y = position.y;
 })
}


