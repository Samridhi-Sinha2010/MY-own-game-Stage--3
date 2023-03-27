var coin, coinImage ;

var heart1, heart1Img ;
var heart2, heart2Img ;
var heart3 , heart3Img ;

var monster1 , monster1Img;
var monster2 , monster2Img;
var monster3 , monster3Img;
var monster4 , monster4Img;

var player;

var score = 0;

var wall1, wall2, wall3, wall4, wall5, wall6 , wall7,  wall8,  wall9,  wall10,
wall11,  wall12,  wall13,  wall14,  wall15,  wall16,  wall17,  wall18,  wall19,
wall20, wall21,  wall22,  wall23,  wall24, wall25 ;

var lives = 3;

var gameState;
var gameState = 0;
var gameState = 1;






function preload(){
 coinImage = loadImage("assets/coin.png");

 heart1Img = loadImage("assets/heart_1.png");
 heart2Img = loadImage("assets/heart_2.png");
 heart3Img = loadImage("assets/heart_3.png");

 monster1Img = loadImage("assets/Monster1.png");
 monster2Img = loadImage("assets/Monster2.png");
 monster3Img = loadImage("assets/Monster3.png");
 monster4Img = loadImage("assets/Monster4.png");



}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  background("black");

//creating player sprite
  player = createSprite(676,262,30,30);
  player.shapeColor = "white" ;

  
//creating coin sprite
  coin = createSprite(99,330,30,30);
  coin.scale = 0.2;
  coin.addImage(coinImage);


//creating monster sprite
  monster1 = createSprite(130,100,30,30);
  monster1.scale = 0.15;
  monster1.addImage(monster1Img);

  monster2 = createSprite(319,181,30,30);
  monster2.scale = 0.15;
  monster2.addImage(monster2Img);

  monster3 = createSprite(342,90,30,30);
  monster3.scale = 0.15;
  monster3.addImage(monster3Img);

  monster4 = createSprite(210,175,30,30);
  monster4.scale = 0.15;
  monster4.addImage(monster4Img);

  //creating lives sprite

  lives = createSprite(349,35,30,30);
  lives.scale = 0.3;
  lives.addImage(heart3Img);

  //creating maze sprite



wall1 = createSprite(480,153,100,20);
wall1.shapeColor= "darkgreen";

wall2 =createSprite(580,130,20,100);
wall2.shapeColor = "darkgreen";

wall3 =createSprite(636,102,100,20);
wall3.shapeColor = "darkgreen";

wall4 =createSprite(505,228,20,100);
wall4.shapeColor = "darkgreen";

wall5 = createSprite(584,245,100,20);
wall5.shapeColor = "darkgreen";

wall6 =createSprite(707,162,100,20);
wall6.shapeColor = "darkgreen";

wall7 = createSprite(664,250,20,100);
wall7.shapeColor = "darkgreen";

wall8 =createSprite(765,290,100,20);
wall8.shapeColor = "darkgreen";  

wall9 = createSprite(870,227,20,100);
wall9.shapeColor = "darkgreen";

wall10 = createSprite(770,370,20,100);
wall10.shapeColor = "darkgreen";

wall11 = createSprite(575,320,20,100);
wall11.shapeColor = "darkgreen";

wall12 = createSprite(971,277,20,100);
wall12.shapeColor = "darkgreen";

wall13 = createSprite(645,429,20,100);
wall13.shapeColor = "darkgreen";

wall14 =createSprite(945,220,100,20);
wall14.shapeColor = "darkgreen";

wall15 =createSprite(755,446,100,20);
wall15.shapeColor = "darkgreen";

wall16 =createSprite(540,430,100,20);
wall16.shapeColor = "darkgreen";

wall17 = createSprite(880,435,20,100);
wall17.shapeColor = "darkgreen";

wall19 =createSprite(850,127,100,20);
wall19.shapeColor = "darkgreen";

wall20 = createSprite(438,378,20,100);
wall20.shapeColor = "darkgreen";

wall21 =createSprite(946,366,100,20);
wall21.shapeColor = "darkgreen";

wall22 = createSprite(528,527,20,100);
wall22.shapeColor = "darkgreen";

wall23=createSprite(656,545,100,20);
wall23.shapeColor = "darkgreen";

wall24 = createSprite(776,530,20,100);
wall24.shapeColor = "darkgreen";

wall25 = createSprite(952,477,20,100);
wall25.shapeColor = "darkgreen"



}

function draw() {
  background(0); 

  text(mouseX+","+mouseY,mouseX,mouseY);
  text("score:"+ score,500,50);


  if(player.isTouching(coin)){
    score = score+10;
  }

  //movement of player

  if(keyDown("UP_ARROW")){
    player.y -= 10;
  }
 
  if(keyDown("DOWN_ARROW")){
    player.y += 10;
  }

  if(keyDown("RIGHT_ARROW")){
    player.x += 10;
  }

  if(keyDown("LEFT_ARROW")){
    player.x -= 10;
  }

  //Collision

  if(player.isTouching(monster1)){
    score = score-5;
  }

  if(player.isTouching(monster2)){
    player.y = player.y+25; 
  }

  if(player.isTouching(monster3)){
    player.bounceOff(monster3);
  }
    
  if(player.isTouching(monster4)){
     gameState = 0;
  }

  // monster1.bounceOff(wall1&&wall2&&wall3&&wall4&&wall5&&wall6&&wall7&&wall8&&wall9&&wall10&&wall11&&wall12&wall13&&wall14&&wall15&&
  //   wall16&&wall17&&wall18&&wall19&&wall20&&wall21&&wall22&&wall23&&wall24&&wall25) ;   

  // monster2.bounceOff((wall1&&wall2&&wall3&&wall4&&wall5&&wall6&&wall7&&wall8&&wall9&&wall10&&wall11&&wall12&wall13&&wall14&&wall15&&
  //   wall16&&wall17&&wall18&&wall19&&wall20&&wall21&&wall22&&wall23&&wall24&&wall25));

  // monster3.bounceOff((wall1&&wall2&&wall3&&wall4&&wall5&&wall6&&wall7&&wall8&&wall9&&wall10&&wall11&&wall12&wall13&&wall14&&wall15&&
  //     wall16&&wall17&&wall18&&wall19&&wall20&&wall21&&wall22&&wall23&&wall24&&wall25));
    
  // monster4.bounceOff((wall1&&wall2&&wall3&&wall4&&wall5&&wall6&&wall7&&wall8&&wall9&&wall10&&wall11&&wall12&wall13&&wall14&&wall15&&
  //       wall16&&wall17&&wall18&&wall19&&wall20&&wall21&&wall22&&wall23&&wall24&&wall25));



  //random powerups to avoid monsters

  //lives

if(player.isTouching(wall1||wall2||wall3||wall4||wall5||wall6||wall7||wall8||wall9||wall10||wall11||wall12||
  wall13||wall14||wall15||wall16||wall17||wall18||wall19||wall20||wall21||wall22||wall23||wall24||wall25))
  {
    lives = lives-1;

    if(lives===2){
      changeImage(heart2Img);
    }

    if(lives===1){
      changeImage(heart1Img);
    }

    if(lives===0){
      gameState = 0;
    }
  
  }

  

drawSprites();

}
