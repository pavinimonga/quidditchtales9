var gameState =0;
var edges;
var house = "";
var score=0;
var char;

function preload(){

      //gamestate0
      bg0img=loadImage("../images/bg0.png");
      startimg=loadImage("../images/start.png");

      //gameState1
      mazebgimg=loadImage("../images/mazebg.jpg");
      harryimage=loadImage("../images/harrypottergame.png");
      bushLimg=loadImage("../images/bushL.png");
      bushTimg=loadImage("../images/bushT.png");
      fireDownimg=loadImage("../images/fireDown.png");
      fireLeftimg=loadImage("../images/fireLeft.png");
      fireUpimg=loadImage("../images/fireUp.png");
      ghostimg=loadImage("../images/dementor.png");
      wallVimg=loadImage("../images/wallV.jpg");
      wallHimg=loadImage("../images/wallH.jpg");
      doorimg=loadImage("../images/door.png");

      //gameState2
      slytherinimg=loadImage("../images/slytherin.png");
      griffindorimg=loadImage("../images/griffindor.png");
      hufflepuffimg=loadImage("../images/hufflepuff.png");
      ravenclawimg=loadImage("../images/ravenclaw.png");

      //gameState3
      harry2img=loadImage("../images/harrypotter.png");
      ginnyimg=loadImage("../images/ginnyweasley.jpg");
      oliverimg=loadImage("../images/oliverwood.png");
      dracoimg=loadImage("../images/dracomalfoy.png");
      poleimg=loadImage("../images/poles.jpg");
      snitchimg=loadImage("../images/snitch.jpg");
      quaffleimg=loadImage("../images/quaffle.png");
      buldgerimg=loadImage("../images/buldger.png");
      keepering=loadImage("../images/keeper.png");
      
}

function setup(){
      createCanvas(windowWidth,windowHeight);

      edges = createEdgeSprites();

      //Instructions
      setStartLevel();

      //Maze Level
      setMaze();  

      //Selecting House
      setLevel2();

      //Quidditch
      setLevel3();
}

function draw(){
      background(0);
      drawSprites();
      
      if(gameState===0){
            stroke("silver");
            strokeWeight(4);
            textSize(20);
            fill(255);
            text("Welcome to the Hogwarts World!\n Level 1: \n Use arrow keys to reach the final door..",width/2-150,height/2); 

            if(mousePressedOver(start)){
                  bg0.visible=false;
                  start.visible=false;
                  gameState=1;
              
            } 
      }  

      if(gameState===1){
            playMaze();
      }
      
      if(gameState===2){
            playLevel2();
      }

      if(gameState===3){
            playLevel3();
      }
 
      
}

function setStartLevel(){

      bg0=createSprite(width/2,height/2-150,width,height);
      bg0.addImage(bg0img);
      bg0.scale=2;

      start=createSprite(width/2,height/2+150,50,30);
      start.addImage(startimg);
      start.scale=0.5;

}

function setMaze(){

      bg1=createSprite(width/2,height/2-150,width,height);
      bg1.addImage(mazebgimg);
      bg1.visible = false;
      bg1.scale=4;

      wallGroup = new Group();
      bushGroup = new Group();
      fireGroup = new Group();
      ghostGroup = new Group();

      createBushes();
      createWalls();
      createGhosts();

      door = createSprite(width-50,height-70,100,150);
      door.addImage(doorimg);
      door.visible=false;
      door.scale=0.25;
      door.setCollider("rectangle",0,0,300,500);

      harry=createSprite(100,height-100,50,50);
      harry.addImage(harryimage);
      harry.visible=false;
      harry.scale=0.15;            
}

function createBushes(){
 
      //bush1
      for(var b = height-350; b < height; b=b+50){
            bush = createSprite(width/6-60,b,100,25);
            bush.addImage(bushLimg);
            bush.scale=0.4;
            bushGroup.add(bush);
      }

      //bush2
      for(var b2 = height/5; b2 < height/2; b2=b2+30){
            bush2 = createSprite(width/4.25,b2,100,25);
            bush2.addImage(bushTimg);
            bush2.scale=0.3;
            bushGroup.add(bush2);
      }

      //bush3
       for(var b3 = width/3.5+50; b3 < width/2; b3=b3+30){
            bush3 = createSprite(b3,height/2.5+25,100,25);
            bush3.addImage(bushTimg);
            bush3.scale=0.3;
            bushGroup.add(bush3);
      }

      //bush4
       for(var b4 = 100; b4 < height/2; b4=b4+30){
            bush4 = createSprite(width/2+50,b4,100,25);
            bush4.addImage(bushTimg);
            bush4.scale=0.3;
            bushGroup.add(bush4);
      }

      //bush5
        for(var b5 = width/2+50; b5 < width/2+275; b5=b5+30){
            bush5 = createSprite(b5,height-200,100,25);
            bush5.addImage(bushTimg);
            bush5.scale=0.3;
            bushGroup.add(bush5);
      }

      //bush6
       for(var b6 = height-200; b6 < height; b6=b6+30){
            bush6 = createSprite(width/2+50,b6,100,25);
            bush6.addImage(bushTimg);
            bush6.scale=0.3;
            bushGroup.add(bush6);
      }

      //bush7
       for(var b7 = width-200; b7 < width; b7=b7+30){
            bush7 = createSprite(b7,175,100,25);
            bush7.addImage(bushTimg);
            bush7.scale=0.3;
            bushGroup.add(bush7);
      }

      //bush8
       for(var b8 = width/2+325; b8 < width-350; b8=b8+30){
            bush8 = createSprite(b8,120,100,25);
            bush8.addImage(bushTimg);
            bush8.scale=0.3;
            bushGroup.add(bush8);
      }

      //bush9
       for(var b9 = 200; b9 < height/2+100; b9=b9+30){
            bush9 = createSprite(width-100,b9,100,25);
            bush9.addImage(bushTimg);
            bush9.scale=0.3;
            bushGroup.add(bush9);
       }
       
       bushGroup.setVisibleEach(false);
}

function createWalls(){
      //wall1
      for(var w = 30; w < height/4; w=w+45){
            wall=createSprite(width/6-60,w,100,30);
            wall.addImage(wallVimg);
            wall.scale=0.4;
            wallGroup.add(wall);
      }

       //wall2
       for(var w2 = width/5.5; w2 < width/5; w2=w2+45){
            wall2=createSprite(w2,height/2,100,30);
            wall2.addImage(wallHimg);
            wall2.scale=0.4;
            wallGroup.add(wall2);
      }

      //wall3
      for(var w3 = width/3; w3 < width/2.5; w3=w3+45){
            wall3=createSprite(w3,100,100,30);
            wall3.addImage(wallHimg);
            wall3.scale=0.4;
            wallGroup.add(wall3);

      }

      //wall4
      for(var w4 = 30; w4 < height/4; w4=w4+45){
            wall4=createSprite(width/2.25-20,w4,100,30);
            wall4.addImage(wallVimg);
            wall4.scale=0.4;
            wallGroup.add(wall4);
      }

      //wall5
       for(var w5 = height/2+20; w5 < height-200; w5=w5+45){
            wall5=createSprite(width/2.5+20,w5,100,30);
            wall5.addImage(wallVimg);
            wall5.scale=0.4;
            wallGroup.add(wall5);
      }

       //wall6
       for(var w6 = width/4.25; w6 < width/2.5; w6=w6+45){
            wall6=createSprite(w6,height/2+130,100,30);
            wall6.addImage(wallHimg);
            wall6.scale=0.4;
            wallGroup.add(wall6);

      }

      //wall7
      for(var w7 = 150; w7 < height-200; w7=w7+45){
            wall7=createSprite(width/2+300,w7,100,30);
            wall7.addImage(wallVimg);
            wall7.scale=0.4;
            wallGroup.add(wall7);
      }

      //wall8
       for(var w8 = width/2+200; w8 < width/2+450; w8=w8+45){
            wall8=createSprite(w8,height/2-50,100,30);
            wall8.addImage(wallHimg);
            wall8.scale=0.4;
            wallGroup.add(wall8);
      }

      //wall9
      for(var w9 = width-250; w9 < width-100; w9=w9+45){
            wall9=createSprite(w9,height/2+125,100,30);
            wall9.addImage(wallHimg);
            wall9.scale=0.4;
            wallGroup.add(wall9);
      }

      //wall10
      for(var w10 = height-300; w10 < height-200; w10=w10+45){
            wall10=createSprite(width-280,w7,100,30);
            wall10.addImage(wallVimg);
            wall10.scale=0.4;
            wallGroup.add(wall10);
      }

      wallGroup.setVisibleEach(false);

}

function createFire(){

      if(frameCount % 30===0){
            fire1= createSprite(250,-50,20,20);
            fire1.addImage(fireDownimg);
            fire1.scale=0.15;
            fire1.velocityY=8;
            fire1.lifetime=40;
            fireGroup.add(fire1);

            fire2= createSprite(width/2+200,-50,20,20);
            fire2.addImage(fireDownimg);
            fire2.scale=0.15;
            fire2.velocityY=8;
            fire2.lifetime=40;
            fireGroup.add(fire2);

            fire3= createSprite(width,50,20,20);
            fire3.addImage(fireLeftimg);
            fire3.scale=0.15;
            fire3.velocityX=-4;
            fire3.lifetime=60;
            fireGroup.add(fire3);

            fire4= createSprite(width-375,height,20,20);
            fire4.addImage(fireUpimg);
            fire4.scale=0.15;
            fire4.velocityY=-8;
            fire4.lifetime=45;
            fireGroup.add(fire4);
      }

}

function createGhosts(){
      ghost1= createSprite(bush.x+150,height-70,50,50);
      ghost1.addImage(ghostimg);
      ghost1.scale=0.25;
      ghost1.velocityX=10;
      ghost1.setCollider("rectangle",0,0,175,425);
      ghostGroup.add(ghost1);

      ghost2= createSprite(bush4.x-85,bush3.y-200,50,50);
      ghost2.addImage(ghostimg);
      ghost2.scale=0.3;
      ghost2.velocityY=2;
      ghost2.setCollider("rectangle",0,0,175,400);
      ghostGroup.add(ghost2);

      ghost3= createSprite(width-200,height/2+100,50,50);
      ghost3.addImage(ghostimg);
      ghost3.scale=0.15;
      ghost3.velocityY=3;
      ghost3.setCollider("rectangle",0,0,175,400);
      ghostGroup.add(ghost3);

      ghostGroup.setVisibleEach(false);
}

function playMaze(){

      bg1.visible = true;
      createFire();
      harry.visible=true;
      bushGroup.setVisibleEach(true);
      wallGroup.setVisibleEach(true);
      ghostGroup.setVisibleEach(true);
      door.visible=true;	  

      bush.debug=true;
      bush.setCollider("rectangle",0,0,bush.width,bush.heighgt);
      ghost2.bounceOff(edges[2]);
      ghost3.bounceOff(edges[3]);
      ghostGroup.bounceOff(bushGroup);
      ghostGroup.bounceOff(wallGroup);
      harry.collide(edges[0]);
      harry.collide(edges[1]);
      harry.collide(edges[2]);
      harry.collide(edges[3]);
      harry.collide(wallGroup);
      harry.collide(bushGroup);

      if(keyDown(UP_ARROW)){
            harry.y=harry.y-10;
      }
      if(keyDown(DOWN_ARROW)){
            harry.y=harry.y+10;
      }
      if(keyDown(LEFT_ARROW)){
            harry.x=harry.x-10;
      }   
      if(keyDown(RIGHT_ARROW)){
            harry.x=harry.x+10;
      } 

      if(harry.isTouching(fireGroup)||harry.isTouching(ghostGroup)){
            harry.x=100;
            harry.y=height-100;      
      }  

      if(harry.isTouching(door)){
            harry.visible=false;
            bushGroup.setVisibleEach(false);
            wallGroup.setVisibleEach(false);
            fireGroup.setVisibleEach(false);
            ghostGroup.setVisibleEach(false);
            door.visible=false;
            gameState = 2;
      }
}

function setLevel2(){
      slytherin=createSprite(width/4-50,height/2+50,50,50);
      slytherin.addImage(slytherinimg);
      slytherin.scale=0.35;
      slytherin.visible = false;

      griffindor=createSprite(width/3+100,height/2+50,50,50);
      griffindor.addImage(griffindorimg);
      griffindor.scale=0.35;
      griffindor.visible = false;

      hufflepuff=createSprite(width/2+125,height/2+50,50,50);
      hufflepuff.addImage(hufflepuffimg);
      hufflepuff.scale=0.3;
      hufflepuff.visible=false;

      ravenclaw=createSprite(width-350,height/2+50,50,50);
      ravenclaw.addImage(ravenclawimg);
      ravenclaw.scale=0.35;
      ravenclaw.visible=false;
}

function playLevel2(){

      slytherin.visible = true;
      griffindor.visible = true;
      hufflepuff.visible=true;
      ravenclaw.visible=true;

      stroke("silver");
      strokeWeight(5);
      textSize(30);
      fill("yellow");
      text("Congratulations for passing Level 1!",width/3,height/4-75);
      textSize(25);
      fill(255);
      text("Level 2 : You have reached the quidditch Stadium at Hogwarts!",width/3-100,height/3-50);
      text("Pick your hogwarts house, your character and your role as a quidditch player!", width/3-175,height/3-20); 
      text("Move your character using the arrow keys",width/2,height/2+200);
      
      if(mousePressedOver(slytherin)){
            house = "slytherin";
            gameState=3;
      }
      else if(mousePressedOver(griffindor)){
            house = "griffindor";
            gameState=3;
      }
      else if(mousePressedOver(hufflepuff)){
            house = "hufflepuff";
            gameState=3;
      }
      else if(mousePressedOver(ravenclaw)){
            house = "ravenclaw";
            gameState=3;
      }

}


function setLevel3(){
      //create the scene of how quidditch should be set
      pole=createSprite(width/5,height/2,50,50);
      pole.addImage(poleimg);
      pole.scale=2;
      snitch=createSprite(width/4,height/4,50,50);
      snitch.addImage(snitchimg);
      snitch.scale=1;
      snitch.velocityY=2;
      snitch.bounceOff("edges");
      quaffle=createSprite(width/1.5,height/1,50,50);
      quaffle.addImage(quaffleimg);
      quaffle.scale=1;
      buldger=createSprite(width/2,height/3,50,50);
      buldger.addImage(buldgerimg);
      buldger.scale=1;
      keeper=createSprite(width/5+100,height/2,50,50);
      keeper.addImage(keepering);
      keeper.scale=1;
      keeper.velocityY=2;
      keeper.bounceOff("edges");

      pole.visible=false;
      snitch.visible=false;
      quaffle.visible=false;
      buldger.visible=false;
      keeper.visible=false;

}


function playLevel3(){
      bg1.visible=false;
      slytherin.visible = false;
      griffindor.visible = false;
      hufflepuff.visible = false;
      ravenclaw.visible = false;

      pole.visible=true;
      snitch.visible=true;
      quaffle.visible=true;
      buldger.visible=true;
      keeper.visible=true;
      quaffle.bounceOff(edges[0]);
      quaffle.bounceOff(edges[1]);
      quaffle.bounceOff(edges[2]);
      quaffle.bounceOff(edges[3]);
      buldger.bounceOff(edges[0]);
      buldger.bounceOff(edges[1]);
      buldger.bounceOff(edges[2]);
      buldger.bounceOff(edges[3]);
      

      text("Score=",width-100,height-100,);
      if(house === "griffindor"){
            oliverwood=createSprite(width/4,height-100,50,50);
            oliverwood.addImage(oliverimg);
            oliverwood.scale=0.35;
      }
      else if(house === "slytherin"){
            draco=createSprite(width/4,height-100,50,50);
            draco.addImage(dracoimg);
            draco.scale=0.35;            
      }
      else if(house === "hufflepuff"){
            harry2=createSprite(width/4-100,height-100,50,50);
            harry2.addImage(harry2img);
            harry2.scale=0.35;
      }
      else{house==="ravenclaw";
            ginny=createSprite(width/4-100,height-100,50,50);
            ginny.addImage(ginnyimg);
            ginny.scale=0.35;
            
      }
      
      
      
      if(char===harry2){
            if(keyDown(UP_ARROW)){
                  harry2.y=harry2.y-10;
            }
            if(keyDown(DOWN_ARROW)){
                  harry2.y=harry2.y+10;
            }
            if(keyDown(LEFT_ARROW)){
                  harry2.x=harry2.x-10;
            }   
            if(keyDown(RIGHT_ARROW)){
                  harry2.x=harry2.x+10;
            } 
      }
     
      if(char===ginny){
            if(keyDown(UP_ARROW)){
                  ginny.y=ginny.y-10;
            }
            if(keyDown(DOWN_ARROW)){
                  ginny.y=ginny.y+10;
            }
            if(keyDown(LEFT_ARROW)){
                  ginny.x=ginny.x-10;
            }   
            if(keyDown(RIGHT_ARROW)){
                  ginny.x=ginny.x+10;
            }   
      }
      if(char===oliverwood){
            if(keyDown(UP_ARROW)){
                  oliverwood.y=oliverwood.y-10;
            }
            if(keyDown(DOWN_ARROW)){
                  oliverwood.y=oliverwood.y+10;
            }
            if(keyDown(LEFT_ARROW)){
                  oliverwood.x=oliverwood.x-10;
            }   
            if(keyDown(RIGHT_ARROW)){
                  oliverwood.x=oliverwood.x+10;
      }
      
      } 
      if(char===draco)
      if(keyDown(UP_ARROW)){
            draco.y=draco.y-10;
      }
      if(keyDown(DOWN_ARROW)){
            draco.y=draco.y+10;
      }
      if(keyDown(LEFT_ARROW)){
            draco.x=draco.x-10;
      }   
      if(keyDown(RIGHT_ARROW)){
            draco.x=draco.x+10;
      } 
     
     if(snitch.isTouching(harry2)||snitch.isTouching(ginny)||snitch.isTouching(oliverwood)||snitch.isTouching(draco)){
           score=score+150;
     }
  else if(buldger.isTouching(poles)){
        score=score+10;
  }
}