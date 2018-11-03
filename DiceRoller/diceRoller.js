var dice;
input = "";

function setup() {
  createCanvas(800, 800);
  dice = new Dice();
  textAlign(CENTER, CENTER);
  textSize(width / 3);
  frameRate(7);
}

function draw() {
  background(200);
  dice.draw();
}

function keyPressed() {

  if (keyCode === 37) {
    fill(0);
    value = dice.roll(20);
  }
  if (keyCode === 32) {
    dice.animate(input);
    input = "";
  } else {
    if (!isNaN(String.fromCharCode(keyCode))) {
      input += String.fromCharCode(keyCode);
      console.log(input);  
    }
  }

  if (keyCode === 8){
    input = "";
    console.log(input);
  }

}