function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  zoio(random(0, width), random(0, height), 50, '#'+(Math.random()*0xFFFFFF|0).toString(16));
}

function zoio(x, y, T, col){
  push();
  translate(x, y);
  var b = random(0, T/2); //nivel de drogas
  fill(255);
  ellipse(0, 0, T, T/2); //globo ocular
  fill(col);
  ellipse(0, 0, T/2, T/2); //iris
  fill(0);
  ellipse(0, 0, b, b); //pupila
  fill(255);
  noStroke();
  ellipse(T/16, -T/16, T/8, T/8); //brilho1
  ellipse(-T/16, T/16, T/16, T/16); //brilho2
  pop();
}