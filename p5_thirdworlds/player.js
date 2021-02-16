
class Player{ 
  constructor(initx, inity, inits, initc) {
    this.x = initx;
    this.y = inity; 
    this.size = inits;
    this.color = initc; 
  } 
  display() {
    noStroke(); 
    fill(this.color);
    square(this.x, this.y, this.size);  
  }
  
  moveleft() {
    this.x -= 1;
  }
  
  moveright() {
    this.x += 1;
   }
  
  moveup() { 
    this.y -= 1;
  }
  
  movedown(){ 
    this.y += 1; 
  }
  
  reset(newx, newy){ 
    this.x = newx; 
    this.y = newy; 
  }
  
  boundaries(){ 
    if(this.x >width){this.x = 0;}
    if(this.x < -10){this.x = width;}
    if(this.y >= height){this.y = 0;}
    if(this.y<= -10){this.y = height;}
  }
}