var ship;
var shipImage;
let score = 0;
let highscore = 0;
let bubbles = [];
let comets = [];
let level = 1;


function preload() {
  shipImage = loadImage('jet6.2.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<3; i++){//starts out with 5 bubbles
    bubbles[i] = new Bubble(width+50, random(50,height-50), random(2,4), random(20,50));
  }
    for (let i=0; i<1; i++){//starts out with 0 comets
    comets[i] = new Comet(width, random(50, height-50), random(level+4,4+level*1.5), random(20+level*3,50+level*3));
  }
  ship = createSprite(width/3, height/2);// start location
  ship.maxSpeed = 8;

  ship.addImage('normal', shipImage); //basic sprite image
  ship.addAnimation('thrust', 'jet6.3.png','jet6.4.png','jet6.3.png','jet6.4.png','jet6.3.png','jet6.4.png','jet6.8.png');
  //thrust of the back animation images
  ship.addAnimation('thrust_front','jet6.1.png','jet6.6.png','jet6.1.png','jet6.6.png','jet6.7.png','jet6.6.png','jet6.1.png','jet6.6.png');
  //thrust of the front animation images
}

function draw() {
  background(150-level*7, 10+level*8, 260-level*5,);   //background gets darker as you get more points
  //background(58, 0+level*50, 153, 255-level*50) // blurry effect on level up
  //background(100,240,150)
  push()
  textSize(32);
  fill(255)
  text('Score: '+ score, 20, 40)
  text('Highscore: '+ highscore, 20, 80) //displays score in the corner
//  text('Level: '+ level, 20, 120) // displays level
  pop()
    for (let i=0; i <bubbles.length; i++){ //draws bubbles as in setup
    bubbles[i].move();
    bubbles[i].show();

    if (bubbles[i].pos.x <-50){ //when the bubble is off-screen
      bubbles.splice(i,1);//stops rendering of bubble
    }
    if (dist(bubbles[i].pos.x, bubbles[i].pos.y,ship.position.x,ship.position.y)<bubbles[i].size+5) {
      score = score + int(50 - bubbles[i].size + 10);
      if (score > highscore)
     highscore = score;
      bubbles.splice(i,1); //if the ship hits a bubble, the bubble will stop rendering/splice
      // sometimes this bugs, if you hit too many bubbles the program stops
    }
  }
    for (let i=0; i <comets.length; i++){ //draws comets as in setup
    comets[i].move();
    comets[i].show();

    if (comets[i].pos.x <-50){ //when the bubble is off-screen
      comets.splice(i,1);//stops rendering of bubble
    }
    if (dist(comets[i].pos.x,comets[i].pos.y,ship.position.x,ship.position.y)<comets[i].size+5){
    //  comets.splice(i,1);    //if the ship hits a comet, the comet will stop rendering/splice
      //comets[i].size += 10;
      ship.addSpeed(2*comets[i].size*(level*1.1), ship.rotation +random(90,180));
  }

    //     ship = createSprite(width/3, height/2);// start location
    //     ship.maxSpeed = 8;
    //     ship.addImage('normal', shipImage); //basic sprite image
    //     ship.addAnimation('thrust', 'jet6.3.png','jet6.4.png','jet6.3.png','jet6.4.png','jet6.3.png','jet6.4.png','jet6.8.png');
    //     //thrust of the back animation images
    //     ship.addAnimation('thrust_front','jet6.1.png','jet6.6.png','jet6.1.png','jet6.6.png','jet6.7.png','jet6.6.png','jet6.1.png','jet6.6.png');
    //     //thrust of the front animation images
    //         score = 0
    //
}
  if (ship.position.x>width+50||ship.position.x<-50||ship.position.y>height+50||ship.position.y<-50){

    ship = createSprite(width/3, height/2);// start location
    ship.maxSpeed = 8;
    ship.addImage('normal', shipImage); //basic sprite image
    ship.addAnimation('thrust', 'jet6.3.png','jet6.4.png','jet6.3.png','jet6.4.png','jet6.3.png','jet6.4.png','jet6.8.png');
    //thrust of the back animation images
    ship.addAnimation('thrust_front','jet6.1.png','jet6.6.png','jet6.1.png','jet6.6.png','jet6.7.png','jet6.6.png','jet6.1.png','jet6.6.png');
    //thrust of the front animation images
  //  ship.position.x=width/3,ship.position.y=height/2//if the ship is out of the canvas, it will return to start and
  //  ship.speed = 0 //does not work as intended; I wanted the ship to stop moving
    score = 0 //the score is 0
  }
  if(frameCount%90 == 0) {//every 90 frames, less as levels go up
    var c = new Bubble(width, random(0, height/2-(50+level*20)), random(1+level,3+(score/300)), random(30-score/100,50-level*2));
    var b = new Bubble(width, random(height/2+(50+level*20), height), random(1+level,3+(score/300)), random(30-score/100,50-level*2));
    bubbles.push(b);//makes new bubbles
    bubbles.push(c);
}
  if(frameCount%90-level*2 == 0) {
      var d = new Comet(width, random(50, height-50), random(level+4,4+level*1.5), random(20+level*3,50+level*3));
    //when score goes up, the speed goes up and the size goes down

    comets.push(d);
}
//   if(frameCount%45 - level*5 == 0) {//every 45 frames

//     var d = new Bubble(width, random(height-50, height-100), random(2,3+(score/300)), random(30-score/100,50-score/200))
//   //when score goes up, the speed goes up and the size goes down
//   bubbles.push(c);//makes new bubbles
//   bubbles.push(d);//makes new bubbles
// }

    level = int(score/500)+1;

// keys to move
  if(keyDown(65))
    ship.rotation -= 4;
  if(keyDown(68))
    ship.rotation += 4;
  if(keyDown(83)){
      ship.addSpeed(-0.03, ship.rotation);
      ship.changeAnimation('thrust_front')
  } else if (keyDown(87)) {
      ship.addSpeed(0.05, ship.rotation);
      ship.changeAnimation('thrust');//changes animation when it goes forward
  }else{
    ship.changeAnimation('normal');
}
  drawSprites();
}
