// main file
let HEIGHT = 400;
let WIDTH = 800;
let ball;
let p1;
let p2;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  ball = new Ball(WIDTH /2, HEIGHT/2);
  p1 = new Player(20, HEIGHT/2, 1);
  p2 = new Player(WIDTH - 20, HEIGHT/2, 2);
}

function draw() {
  background(0);
  p1.move();
  p2.move();
  p1.draw();
  p2.draw();
  ball.checkCollision(p1, p2);
  ball.move();
  ball.draw();
} 
