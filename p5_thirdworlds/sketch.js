let p1; 
let levelcount;  
let texts = 15; 
let dim = 600; 
let resetcount; 
let sqrandposx, sqrandposy; 
let squaresize = 50; 
let squarecolor = 1.2;
let lvlup, song; 
let playersize = 10; 

function preload(){ 
  lvlup = loadSound('assets/fb.mp3');
  song = loadSound('assets/HTD.mp3'); 
}

function setup() {
  createCanvas(dim, dim);
  p1 = new Player(width/2, height/2,playersize, 255); 
  levelcount = 0; 
  resetcount = 0;
}

function draw() {
  background(0);
  if (levelcount == 0){ 
    homescrn();
    song.play(); 
    squarerandpos();
  }else if(levelcount == 1){ 
    level1(); 
  }else if(levelcount%2 == 0){ 
    level2();
  }else{ 
    level3(); 
  } 
  
  if (song.isPlaying() == false){ 
   song.play(); 
  }else{ 
   return 0; 
  }
}

function movement(){ 
  if (keyIsDown(UP_ARROW)){p1.moveup();}
  if (keyIsDown(DOWN_ARROW)){p1.movedown();} 
  if (keyIsDown(RIGHT_ARROW)){p1.moveright();} 
  if (keyIsDown(LEFT_ARROW)){p1.moveleft();}
}


function homescrn(){ 
  textSize(dim*0.05);
  fill(255); 
  textAlign(CENTER);
  text("Welcome to third worlds",width/2, height/2);
  textSize(dim*0.028); 
  text("Press space bar to continue",width/2, height*0.54666666666);
  if(keyIsDown(32)){ levelcount = 1;}
}

function level1(){
  fill(255); 
  textAlign(LEFT);
  textSize(texts);
  text("Level - "+ levelcount,width*0.003,height*0.03);
  textAlign(CENTER); 
  text("You're stuck in purgatory, find your way out", width*0.5,height*0.03); 
  textAlign();
  fill(squarecolor); 
  square(sqrandposx , sqrandposy, squaresize); 
  p1.display(); 
  p1.boundaries(); 
  movement(); 
  
  if ((p1.x > sqrandposx+6) && (p1.x < sqrandposx + squaresize -5)){
    if((p1.y > sqrandposy+6) && (p1.y < sqrandposy + squaresize-5)){
      p1.reset(sqrandposx+5,sqrandposy+5);
      squarerandpos();
      lvlup.play(); 
      levelcount+=1;  
    }  
  }
}

function level2(){ 
  fill(255); 
  textAlign(LEFT);
  textSize(texts);
  text("Level - "+ levelcount,width*0.003,height*0.03);
  textAlign(CENTER); 
  text("You've died, find your way back up", width*0.5,height*0.03); 
  textAlign();
  fill(squarecolor); 
  square(sqrandposx , sqrandposy, squaresize); 
  p1.display();
  p1.boundaries();  
  movement();  

  if ((p1.x > sqrandposx+6) && (p1.x < sqrandposx + squaresize-5)){
    if((p1.y > sqrandposy+6) && (p1.y < sqrandposy + squaresize-5)){
      p1.reset(sqrandposx+5,sqrandposy+5);
      squarerandpos();
      lvlup.play();
      levelcount+=1;  
    }  
  }
}

function level3(){
  fill(255); 
  textAlign(LEFT);
  textSize(texts);
  text("Level - "+ levelcount,width*0.003,height*0.03);
  textAlign(CENTER); 
  text("You're back in purgatory, find your way out", width*0.5,height*0.03); 
  textAlign(); 
  fill(squarecolor); 
  square(sqrandposx , sqrandposy, squaresize); 
  p1.display(); 
  p1.boundaries(); 
  movement(); 
  
  if ((p1.x > sqrandposx+7) && (p1.x < sqrandposx + squaresize)){
    if((p1.y > sqrandposy+7) && (p1.y < sqrandposy + squaresize)){
      p1.reset(sqrandposx+5,sqrandposy+5);
      squarerandpos();
      lvlup.play();
      levelcount+=1;  
    }  
  }
}

function squarerandpos(){ 
  sqrandposx = random(0, width - squaresize); 
  sqrandposy = random(height*0.03, height - squaresize);
  squarecolor = random(1.2,1.26); 
  if (sqrandposx > 0 && sqrandposy){ 
    return 0;
  }
}



  
