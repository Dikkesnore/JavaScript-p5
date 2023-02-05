// This class controls all the ball movement
class Ball
  {
    constructor(x, y, size = 10)
    {
      this.pos = createVector(x, y);
      this.size = size;
      this.dir = (createVector(1, 1)).normalize();
      this.speed = 12;
    }
    
    resetBall()
      {
        this.pos.x = width / 2;
        this.pos.y = height / 2;
        this.speed = 12;
        this.dir = (createVector(1,1)).normalize();
      }
    
    draw()
    {
      rectMode(CENTER);
      square(this.pos.x, this.pos.y, this.size);
    }
    
    move()
    {
      this.pos.x += this.dir.x * this.speed;
      this.pos.y += this.dir.y * this.speed;
    }
    
    checkCollision(p1, p2)
    {
      // Elastic collisions with wall
      if (this.pos.x - this.size / 2 <= 0 || this.pos.x + this.size / 2 >= width)
          {
            this.resetBall();
          }
      if (this.pos.y - this.size / 2 <= 0 || this.pos.y + this.size / 2 >= height)
          {
            this.dir.y *= -1;
          }
      
      //Collision with players:
      if (this.pos.x - this.size / 2 <= p1.x + p1.width / 2 && 
          (p1.y - p1.height < this.pos.y - this.size / 2 && this.pos.y + this.size / 2 < p1.y + p1.height))
          {
            this.dir = createVector(10, random(-5, 5));
            this.dir.normalize();
            this.speed += 0.05;
          }
      if (this.pos.x + this.size / 2 >= p2.x - p2.width / 2 && 
          (p2.y - p1.height < this.pos.y - this.size / 2 && this.pos.y + this.size / 2 < p2.y + p2.height))
          {
            this.dir = createVector(-10, random(-5, 5));
            this.dir.normalize();
            this.speed += 0.05;
          }
    }
   }
