
class Bubble {
  constructor(xpos, ypos, speed, size){
  this.speed = speed;
  this.pos = new createVector(xpos + random(200)+bubbles.length, ypos);
  this.size = size;

}
  move() {
    this.pos.x-=this.speed;

  }
  show(){
    fill(211, 239, 255, 200)
    stroke(255)
    strokeWeight(1.5)
    circle(this.pos.x,this.pos.y, this.size)
    fill(255,200)
    noStroke()
    circle(this.pos.x-this.size/3,this.pos.y-this.size/2, this.size/4)//little circle inside the bubble

  }
}
