const TOTAL = 250;

let len = 1000;
let brd = 400;

let squares = [];
let squares_backup = [];
let tri_arr = [];

let back_colour = 0;
let tri_count = 0;
let slider;

let incr = 0;
let highScore = 0;

let bestHit = false;
let runBest = false;
let runUser = false;

let bestSquare = null;
let user_Square;
let alive = false;


let img;
function preload() {
  img = loadImage('public/game_over.jpg');
}

function toggleUser(){
  runUser = !runUser;

  if(runUser){
    alive = true;
    user_Square = new UserSquare();
    nextGeneration();
    userButton.html("Quit Playing");
  }
  else{
    alive = false;
    nextGeneration();
    userButton.html("Play");
  }
}

function toggleBest(){

  if(bestSquare != null){
      runBest = !runBest;
  }

  if(runBest){
    resetSketch();
    bestButton.html("Continue Training");
  }
  else{
    nextGeneration();
    bestButton.html("Run Best");
  }
}

function keyPressed(){
  if(key == 'S'){
    let square = squares[0];
    saveJSON(square.brain, 'square.json')
  }
}

function setup() {
    createCanvas(len, brd).parent('sketch-holder');
    for(let i = 0; i < TOTAL; i++){
      square = new MachineSquare();
      squares[i] = square;
      squares_backup[i] = square;
    }
    user_Square = new UserSquare();
    highScoreSpan = select('#hs');
    currentScoreSpan = select('#cs');

    let button = createButton('Reset').parent('button');
    button.position(len-55);
    button.class("badge badge-pill badge-dark");
    button.mousePressed(nextGeneration);

    speedSlider = select('#speedSlider');
    speedSpan = select('#speed');

    bestButton = select('#best');
    bestButton.class("badge badge-danger");
    bestButton.mousePressed(toggleBest);

    userButton = select('#user');
    userButton.class("badge badge-success");
    userButton.mousePressed(toggleUser);
}

function draw(){
  background(back_colour);
  createLine();
  speedSpan.html(speedSlider.value());

  for(let i = 1; i <= speedSlider.value(); i++){

    for(let i = tri_arr.length - 1; i >= 0; i--) {
      tri_arr[i].move();
      if (tri_arr[i].offScreen()) {
        tri_arr.splice(i, 1);
      }
    }

  if(runBest){

    if(!bestHit){
      bestSquare.think(tri_arr);
      bestSquare.move();
    }

    for (let j = 0; j < tri_arr.length; j++) {
      if (tri_arr[j].hits(bestSquare) && !alive) {
        resetSketch();
        break;
      }
      if (tri_arr[j].hits(bestSquare)) {
        bestHit = true;
        break;
      }
    }

    currentScore = bestSquare.score;
    if(currentScore > highScore){
      highScore = currentScore;
    }
    if(!bestHit){
      bestSquare.display();
    }

  }else{

    for(let i = squares.length - 1; i >= 0; i--){
      let square = squares[i];
      square.think(tri_arr);
      square.move();

      for (let j = 0; j < tri_arr.length; j++) {
        if (tri_arr[j].hits(squares[i])) {
          squares.splice(i, 1);
          break;
        }
      }
    }

    for(let i = squares.length - 1; i >= 0; i--){
      currentScore = squares[i].score;
      if(currentScore > highScore){
        highScore = currentScore;
        if(squares.length == 1){
          bestSquare = squares[0];
        }
      }
    }

    for (let i = 0; i < squares.length; i++) {
      squares[i].display();
    }

  }

  if(runUser){

    user_Square.move();
    user_Square.display();

  for(let i = 0; i < tri_arr.length; i++){
    if (tri_arr[i].hits(user_Square)){
      user_Square.score = 0;
      alive = false;
      bestHit = false;
      toggleUser();
        break;
      }
    }

    currentScore = user_Square.score;
    if(currentScore > highScore){
      highScore = currentScore;
    }

  }

  currentScoreSpan.html(currentScore);
  highScoreSpan.html(highScore);

  for (let i = 0; i < tri_arr.length; i++) {
    tri_arr[i].display();
  }

    if (tri_count % int(76 - 3*incr) == 0) {
      tri_arr.push(new Triangle());
    }

    tri_count += 1;
    if(incr <= 8){
      incr += 0.001;
    }
  }

  if(!runBest && !runUser){
    if(squares.length == 0 && !alive){
      nextGeneration();
      resetSketch();
    }
  }

}

function createLine(){
	stroke(255, 204, 0);
	strokeWeight(2);
	line(0, 275, len, 275);
}

function resetSketch(){
  if(bestSquare != null){
    bestSquare.score = 0;
  }
  tri_count = 0;
  tri_arr = [];
  incr = 0;
  background(back_colour);
  createLine();
}

function keyTyped() {

  if((key == 'w' || key == 'W') && user_Square.y == 250){
    user_Square.jump();
  }

}
