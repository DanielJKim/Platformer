class Player {
  constructor(id, hero, x, y) {
    this.id = id;
    this.hero = hero;
    this.upkey = UP_ARROW;
    this.downkey = DOWN_ARROW;
    this.leftkey = LEFT_ARROW;
    this.rightkey = RIGHT_ARROW;
    this.x = x;
    this.y = y;
    this.mass = 10;
    this.xVelocity = createVector(0,0);
    this.yVelocity = 10;
    this.acceleration = createVector(0,0);
    this.maxYSpeed = 10;
    this.airborne = false;
  }

  setArrowKeys(up, down, left, right) {
    this.upkey = up;
    this.downkey = down;
    this.leftkey = left;
    this.rightkey = right;
  }

  drawPlayer() {
    fill('red');
    rect(this.x, this.y, 30, 30);
  }

  jump() {
    let jumpForce = p5.Vector.div(, this.mass)
  }

  updatePlayer() {
    if (keyIsDown(this.leftkey)) {
      this.x -= this.xVelocity;
    }
    if (keyIsDown(this.rightkey)) {
      this.x += this.xVelocity;
    }
    if (keyIsDown(this.upkey)) {
      if (!this.airborne) {
        this.airborne = true;
      }
    }

    if (this.airborne) {
      if (this.yVelocity <= 0) {
        this.acceleration *= -1;
      }
      this.yVelocity -= this.acceleration;
      if (this.acceleration < 0) {
        this.y += this.yVelocity;
      } else {
        this.y -= this.yVelocity;
      }
      if (this.yVelocity >= this.maxYSpeed) {
        this.yVelocity = this.maxYSpeed;
        this.airborne = false;
        this.acceleration = 1;
      }
    }
  }
}
