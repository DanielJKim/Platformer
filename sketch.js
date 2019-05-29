function windowResized() {
  resizeCanvas(windowWidth * 0.8, windowHeight * 0.8);
}

function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.8);
  p1 = new Player(1, 'slime', 50, windowHeight * 0.8 - 500);
  p2 = new Player(2, 'box', 150, windowHeight * 0.8 - 500);
  p2.setArrowKeys(87, 83, 65, 68);
}

function draw() {
  drawBackground();

  p1.updatePlayer();
  p2.updatePlayer();

  p1.drawPlayer();
  p2.drawPlayer();
}

function drawBackground() {
  background('#dddfff');
}
