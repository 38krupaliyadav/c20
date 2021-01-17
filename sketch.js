var mr, fr;

function setup() {
 createCanvas(800,400);

  fr = createSprite(100, 200, 50, 50);
  fr.shapeColor = "green";
  fr.debug = true;

  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor = "green";
  mr.debug = true;
}

function draw() {
  background(0);  

  mr.x = mouseX;
  mr.y = mouseY;

  if (mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < mr.width/2 + fr.width/2 && mr.y - fr.y < mr.height/2 + fr.height/2 && fr.y - mr.y < mr.height/2 + fr.height/2){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }
  else {
    fr.shapeColor = "green";
    mr.shapeColor = "green";    
  }
  drawSprites();
}