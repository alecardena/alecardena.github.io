let snowflakes = []; // array to hold snowflake objects

function setup() {
  pg = createGraphics(400, 250);
  createCanvas(1918, 947);
  fill(240);
  noStroke();
}

function draw() {
  background('#6BC3FA');
  let t = frameCount / 5000; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  //planet shapes and text names
  fill('#C79263');
  ellipse(90,303.5,150,150);

    textSize(20);
    fill('white');
    textWrap(WORD);
    text('Mercury', 55, 295, 100);

  fill('#C73920');
  ellipse(320,303.5,200,200);

    textSize(20);
    fill('white');
    textWrap(WORD);
    text('Venus',290, 295, 100);

  fill('#FF0E01');
  ellipse(550,303.5,170,170);

    textSize(20);
    fill('white');
    textWrap(WORD);
    text('Mars', 525, 295, 100);

  fill('#FA9B0D');
  ellipse(880,303.5,400,400);

    textSize(20);
    fill('white');
    textWrap(WORD);
    text('Jupiter', 850, 295, 100);

  fill('#C7883F');
  ellipse(1260,303.5,300,300);

    textSize(20);
    fill('white');
    textWrap(WORD);
    text('Saturn', 1230, 295, 100);

  fill('#43AAD0');
  ellipse(1550,303.5,220,220);

    textSize(20);
    fill('white');
    textWrap(WORD);
    text('Uranus', 1520, 295, 100);

  fill('#0333B8');
  ellipse(1800,303.5,210,210);

    textSize(20);
    fill('white');
    textWrap(WORD);
    text('Neptune', 1760, 295, 100);

  //ground
  fill('#7EFF4A');
  rect(0,800,1920,250);

  //lake
  fill('#0288E0');
  ellipse(959,1000,1200,400);

  //mountains
  fill('#6B5E39');
  triangle(-100,800,100,800,0,620);

  fill('#6B5E39');
  triangle(100,800,300,800,200,620);

  fill('#6B5E39');
  triangle(300,800,500,800,400,620);

  fill('#6B5E39');
  triangle(500,800,700,800,600,620);

  fill('#9E8A54');
  triangle(0,800,200,800,100,600);

  fill('#9E8A54');
  triangle(200,800,400,800,300,600);

  fill('#9E8A54');
  triangle(400,800,600,800,500,600);

  fill('#9E8A54');
  triangle(600,800,800,800,700,600);

  fill('#6B5E39');
  triangle(1200,800,1400,800,1300,620);

  fill('#6B5E39');
  triangle(1400,800,1600,800,1500,620);

  fill('#6B5E39');
  triangle(1600,800,1800,800,1700,620);
 
  fill('#6B5E39');
  triangle(1800,800,2000,800,1900,620);

  fill('#9E8A54');
  triangle(1100,800,1300,800,1200,600);

  fill('#9E8A54');
  triangle(1300,800,1500,800,1400,600);

  fill('#9E8A54');
  triangle(1500,800,1700,800,1600,600);

  fill('#9E8A54');
  triangle(1700,800,1900,800,1800,600);

  fill('#9E8A54');
  triangle(1900,800,2100,800,2000,600);

textSize(60);
fill('white');
text('Earth', 1650, 900);

textSize(60);
fill('white');
text('Rainy Day', 1610, 100);


  fill(0, 12);
  fill('#3665E6');
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}