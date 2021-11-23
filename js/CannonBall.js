class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
    this.body = Bodies.circle(x,y,this.r,options)
//create a circle body
this.image = loadImage("assets/cannonball.png")
//load the image
    World.add(world, this.body);
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle)
    velocity.mult(20)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body, {x:velocity.x,y:velocity.y})
    //set the angle of ball to cannon
    //set static value to the body
    //set the velocity for the ball to make the ball to move
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
//display the image
    pop();

    }
  }

