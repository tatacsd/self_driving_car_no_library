// Create the car class
class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0; // the car will start at 0 speed
    this.acceleration = 0.2; // the car will accelerate this much
    this.maxSpeed = 3; // the car will not go faster than this
    this.friction = 0.05; // the friction will slow down the car
    this.angle = 0; // the car will start at 0 degrees


    this.sensor = new Sensor(this); // Create a new sensor object
    this.controls = new Controls();
  }
  // Move the car
  update() {
    this.#move();
    this.sensor.update();
  }

  // Draw the car in the canvas context
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);

    ctx.beginPath();
    ctx.rect(
      -this.width / 2, // the x will be the center of the car
      -this.height / 2, // the y will be the center of the car
      this.width,
      this.height
    );
    
    ctx.fill();

    ctx.restore();
    
  // Draw the sensor
    this.sensor.draw(ctx);
  }

  #move() {
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }

    // if the car is not accelerating, it will slow down
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    // if the car is not accelerating, it will slow down
    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }

    // To stop the car when the speed is too low
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    if (this.speed != 0) {
      //
      const flip = this.speed > 0 ? 1 : -1;
      // Left and right movement
      if (this.controls.left) {
        this.angle += 0.03 * flip;
      }
      if (this.controls.right) {
        this.angle -= 0.03 * flip;
      }
    }

    // Implement car movement according to the angle
    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }
}
