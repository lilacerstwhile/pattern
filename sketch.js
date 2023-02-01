var startingVector;
var displacementVector;
var resultingVector;
var right1Vector;
var right2Vector;
var left1Vector;
var left2Vector;

var startingVectorM;
var displacementVectorM;
var resultingVectorM;
var right1VectorM;
var right2VectorM;
var left1VectorM;
var left2VectorM;

var startingVectorL;
var displacementVectorL;
var resultingVectorL;
var right1VectorL;
var right2VectorL;
var left1VectorL;
var left2VectorL;


// var lines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  startingVector = createVector(0,-80);
  displacementVector = createVector(0, 50);
  right1Vector = createVector(5, 50);
  right2Vector = createVector(10, 50);
  left1Vector = createVector(-5, 50);
  left2Vector = createVector(-10, 50);
  
  startingVectorM = createVector(0,-130);
  displacementVectorM = createVector(0, 90);
  right1VectorM = createVector(10, 90);
  right2VectorM = createVector(20, 90);
  left1VectorM = createVector(-10, 90);
  left2VectorM = createVector(-20, 90);
  
  startingVectorL = createVector(0,-220);
  displacementVectorL = createVector(0, 130);
  right1VectorL = createVector(20, 130);
  right2VectorL = createVector(40, 130);
  left1VectorL = createVector(-20, 130);
  left2VectorL = createVector(-40, 130);
      
  stem();
  mediumLeaf();
  
//   for (let i = 0; i < 9; i ++){
//     lines[i] = new LINE(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
//   }
  
}

function draw() {
  background(0);

  ellipseMode(CENTER);
  noFill();
  stroke(200);
  // ellipse(width/2, width/2.08, 50);
  
  //small_00_top
  translate(width/2, height/2);
  stroke(255);
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
//   startingVector.rotate(radians(0));
  
//   resultingVector = p5.Vector.add(startingVector, right1Vector);
    
//   line(0, 0, resultingVector.x, resultingVector.y);
  
  
  // small_01_right
  startingVector.rotate(90);
  displacementVector.rotate(90);
  right1Vector.rotate(90);
  right2Vector.rotate(90);
  left1Vector.rotate(90);
  left2Vector.rotate(90);
  
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  // small_02_left
  startingVector.rotate(180);
  displacementVector.rotate(180);
  right1Vector.rotate(180);
  right2Vector.rotate(180);
  left1Vector.rotate(180);
  left2Vector.rotate(180);
  
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  // small_03_bottom
  startingVector.rotate(270);
  displacementVector.rotate(270);
  right1Vector.rotate(270);
  right2Vector.rotate(270);
  left1Vector.rotate(270);
  left2Vector.rotate(270);
  
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  
  // small_04_top&right
  startingVector.rotate(45);
  displacementVector.rotate(45);
  right1Vector.rotate(45);
  right2Vector.rotate(45);
  left1Vector.rotate(45);
  left2Vector.rotate(45);
  
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  // small_05_bottom&right
  startingVector.rotate(90);
  displacementVector.rotate(90);
  right1Vector.rotate(90);
  right2Vector.rotate(90);
  left1Vector.rotate(90);
  left2Vector.rotate(90);
  
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
 
  
  
  // small_06_bottom&left
  startingVector.rotate(90);
  displacementVector.rotate(90);
  right1Vector.rotate(90);
  right2Vector.rotate(90);
  left1Vector.rotate(90);
  left2Vector.rotate(90);
  
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  
  // small_07_top&left
  startingVector.rotate(90);
  displacementVector.rotate(90);
  right1Vector.rotate(90);
  right2Vector.rotate(90);
  left1Vector.rotate(90);
  left2Vector.rotate(90);
  
  
  line(startingVector.x, startingVector.y, startingVector.x, startingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
  //medium_00_top
  startingVectorM.rotate(22.5);
  displacementVectorM.rotate(22.5);
  right1VectorM.rotate(22.5);
  right2VectorM.rotate(22.5);
  left1VectorM.rotate(22.5);
  left2VectorM.rotate(22.5);
  
  line(startingVectorM.x, startingVectorM.y, startingVectorM.x, startingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, displacementVectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  
  //medium_01
  startingVectorM.rotate(45);
  displacementVectorM.rotate(45);
  right1VectorM.rotate(45);
  right2VectorM.rotate(45);
  left1VectorM.rotate(45);
  left2VectorM.rotate(45);
  
  line(startingVectorM.x, startingVectorM.y, startingVectorM.x, startingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, displacementVectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  
  //medium_02
  startingVectorM.rotate(45);
  displacementVectorM.rotate(45);
  right1VectorM.rotate(45);
  right2VectorM.rotate(45);
  left1VectorM.rotate(45);
  left2VectorM.rotate(45);
  
  line(startingVectorM.x, startingVectorM.y, startingVectorM.x, startingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, displacementVectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  
  //medium_03
  startingVectorM.rotate(45);
  displacementVectorM.rotate(45);
  right1VectorM.rotate(45);
  right2VectorM.rotate(45);
  left1VectorM.rotate(45);
  left2VectorM.rotate(45);
  
  line(startingVectorM.x, startingVectorM.y, startingVectorM.x, startingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, displacementVectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  
  //medium_04
  startingVectorM.rotate(45);
  displacementVectorM.rotate(45);
  right1VectorM.rotate(45);
  right2VectorM.rotate(45);
  left1VectorM.rotate(45);
  left2VectorM.rotate(45);
  
  line(startingVectorM.x, startingVectorM.y, startingVectorM.x, startingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, displacementVectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  
  //medium_05
  startingVectorM.rotate(45);
  displacementVectorM.rotate(45);
  right1VectorM.rotate(45);
  right2VectorM.rotate(45);
  left1VectorM.rotate(45);
  left2VectorM.rotate(45);
  
  line(startingVectorM.x, startingVectorM.y, startingVectorM.x, startingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, displacementVectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  
  //medium_06
  startingVectorM.rotate(45);
  displacementVectorM.rotate(45);
  right1VectorM.rotate(45);
  right2VectorM.rotate(45);
  left1VectorM.rotate(45);
  left2VectorM.rotate(45);
  
  line(startingVectorM.x, startingVectorM.y, startingVectorM.x, startingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, displacementVectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  
  //medium_07
  startingVectorM.rotate(45);
  displacementVectorM.rotate(45);
  right1VectorM.rotate(45);
  right2VectorM.rotate(45);
  left1VectorM.rotate(45);
  left2VectorM.rotate(45);
  
  line(startingVectorM.x, startingVectorM.y, startingVectorM.x, startingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, displacementVectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, right2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left1VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  resultingVectorM = p5.Vector.add(startingVectorM, left2VectorM);
  
  line(startingVectorM.x, startingVectorM.y, resultingVectorM.x, resultingVectorM.y);
  
  
  //large_00_top  
  line(startingVectorL.x, startingVectorL.y, startingVectorL.x, startingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, displacementVectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  
  //large_01
  startingVectorL.rotate(45);
  displacementVectorL.rotate(45);
  right1VectorL.rotate(45);
  right2VectorL.rotate(45);
  left1VectorL.rotate(45);
  left2VectorL.rotate(45);
  
  line(startingVectorL.x, startingVectorL.y, startingVectorL.x, startingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, displacementVectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  
  //large_02
  startingVectorL.rotate(45);
  displacementVectorL.rotate(45);
  right1VectorL.rotate(45);
  right2VectorL.rotate(45);
  left1VectorL.rotate(45);
  left2VectorL.rotate(45);
  
  line(startingVectorL.x, startingVectorL.y, startingVectorL.x, startingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, displacementVectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  
  //large_03
  startingVectorL.rotate(45);
  displacementVectorL.rotate(45);
  right1VectorL.rotate(45);
  right2VectorL.rotate(45);
  left1VectorL.rotate(45);
  left2VectorL.rotate(45);
  
  line(startingVectorL.x, startingVectorL.y, startingVectorL.x, startingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, displacementVectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  
  //large_04
  startingVectorL.rotate(45);
  displacementVectorL.rotate(45);
  right1VectorL.rotate(45);
  right2VectorL.rotate(45);
  left1VectorL.rotate(45);
  left2VectorL.rotate(45);
  
  line(startingVectorL.x, startingVectorL.y, startingVectorL.x, startingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, displacementVectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  
  //large_05
  startingVectorL.rotate(45);
  displacementVectorL.rotate(45);
  right1VectorL.rotate(45);
  right2VectorL.rotate(45);
  left1VectorL.rotate(45);
  left2VectorL.rotate(45);
  
  line(startingVectorL.x, startingVectorL.y, startingVectorL.x, startingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, displacementVectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  
  //large_06
  startingVectorL.rotate(45);
  displacementVectorL.rotate(45);
  right1VectorL.rotate(45);
  right2VectorL.rotate(45);
  left1VectorL.rotate(45);
  left2VectorL.rotate(45);
  
  line(startingVectorL.x, startingVectorL.y, startingVectorL.x, startingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, displacementVectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  
  //large_07
  startingVectorL.rotate(45);
  displacementVectorL.rotate(45);
  right1VectorL.rotate(45);
  right2VectorL.rotate(45);
  left1VectorL.rotate(45);
  left2VectorL.rotate(45);
  
  line(startingVectorL.x, startingVectorL.y, startingVectorL.x, startingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, displacementVectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, right2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left1VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
  
  resultingVectorL = p5.Vector.add(startingVectorL, left2VectorL);
  
  line(startingVectorL.x, startingVectorL.y, resultingVectorL.x, resultingVectorL.y);
}


function stem(){
  
  strokeWeight(0.8);
  stroke('white');
  displacementVector.setMag(displacementVector.mag()*1.6); 
  right1Vector.setMag(right1Vector.mag()*1.6);
  right2Vector.setMag(right2Vector.mag()*1.6);
  left1Vector.setMag(left1Vector.mag()*1.6);
  left2Vector.setMag(left2Vector.mag()*1.6);
  
  line(startingVector.x, startingVector.y, startingVector.x +30, startingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, displacementVector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, right2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left1Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  resultingVector = p5.Vector.add(startingVector, left2Vector);
  
  line(startingVector.x, startingVector.y, resultingVector.x, resultingVector.y);
  
  
}  


function mediumLeaf(){
  
  //middle_00_top
  
  // for (var i = 0; i < 9; i ++);{
  //   push();//save
  //   line(startingVector.x, startingVector.y -100, resultingVector.x, resultingVector.y -100);
  //   rotate(90);
  //   pop(); //restore
  // }

  noLoop();  
  
}  
  