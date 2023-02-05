class Player
  {
    constructor (x, y, id, speed = 5)
    {
      this.x = x;
      this.y = y;
      this.id = id;
      this.speed = 7;
      this.width = 10;
      this.height = 80;
    }
    
    draw()
    {
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
    }
    
    move()
    {
      if (this.id == 1)
          {
            if(keyIsDown(87))
              {
                if (this.y - 40 >= 0)
                    {
                      this.y -= this.speed;
                    }
              }
            if(keyIsDown(83))
              {
                if (this.y + 40 <= height)
                    {
                      this.y += this.speed;
                    }
              }
          }
      if (this.id == 2)
          {
            if(keyIsDown(UP_ARROW))
              {
                if (this.y - 40 >= 0)
                    {
                      this.y -= this.speed;
                    }
              }
            if(keyIsDown(DOWN_ARROW))
              {
                if (this.y + 40 <= height)
                    {
                      this.y += this.speed;
                    }
              }
          }
    }
    
  }
