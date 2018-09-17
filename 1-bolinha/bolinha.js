
var x, y, vx, vy;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = windowHeight/2;
  vx = 30;
  vy = 30;
  noStroke();
  background("#207621");
}
function draw()
{
  //background("#207621"); // fundo verde feio
  var r = random(255);
  var g = random(255);
  var b = random(255);
  fill(r, g, b, 200); // alpha 100 (255 opaco)
  var tamanho = random(10, 20);
  ellipse(x, y, tamanho, tamanho);
  x = x + vx;
  y = y + vy;
  if (x > windowWidth) {    vx = -vx;  }
  if (x < 0) {     vx = -vx;  }
  if (y > windowHeight || y < 0) {   vy = -vy; }
}