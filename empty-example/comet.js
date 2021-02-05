// let xoff = 0.0;
//
//   xoff = xoff + 0.01;


class Comet {
  constructor(xpos, ypos, speed, size){
  this.speed = speed;
  this.pos = new createVector(xpos + random(100)+comets.length, ypos);
  this.size = size;

}
  move() {
    this.pos.x-=this.speed;
      // let n = noise(xoff) * height;
      // this.pos.y-=n;

  }
  show(){
    smooth();
    fill(0)
    stroke(0)
    strokeWeight(1.5)
    circle(this.pos.x,this.pos.y, this.size)
    triangle(this.pos.x+this.size/4,this.pos.y-this.size+3,this.pos.x+this.size*4,this.pos.y,this.pos.x+this.size/4,this.pos.y +this.size-3)
    fill(0,random(200,255),0,random(100,255))
    noStroke()
    circle(this.pos.x,this.pos.y, this.size/random(1.3,1,9))//little circle inside the bubble

  }
}
