"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload
// let windowWidth = windowWidth;
// let windowHeight = windowHeight;

let canvas;
let cell;
let grid=[];
const NUM_COLS = 20;
const NUM_ROWS = 10;
const SPACER = 5;
const CELL_SIZE =40;

function preload() {

}


// setup()
//
// Description of setup

function setup() {
canvas = createCanvas(window.innerWidth, window.innerHeight);
for(let x =0; x< NUM_COLS;x++){
  // do each column
    for(let y =0; y<NUM_ROWS;y++){
      let cell = new Cell((x*CELL_SIZE)+(SPACER*x), (y*CELL_SIZE)+(SPACER*y),CELL_SIZE,CELL_SIZE);

      grid.push(cell);
    }
}
//cell = new Cell (10,5,40,40);

}
window.onresize = function() {
let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};

// draw()
//
// Description of draw()

function draw() {
  background(0, 0, 0);
  for(let i =0; i<grid.length; i++){
    let cell = grid[i];
    cell.display();
  }
  //cell.display();

/*location: x and y,
// line one
  rect(10,5,40,40);
  rect(50,5,40,40);
  rect(90,5,40,40);
  rect(130,5,40,40);
  rect(170,5,40,40);
  rect(210,5,40,40);
  rect(250,5,40,40);
  rect(250,5,40,40);

  //line two
  rect(10,45,40,40);
  rect(50,45,40,40);
  rect(90,45,40,40);
  rect(130,45,40,40);
  rect(170,45,40,40);
  rect(210,45,40,40);
  rect(250,45,40,40);
  rect(250,45,40,40);

//line 3
  rect(10,85,40,40);
  rect(50,85,40,40);
  rect(90,85,40,40);
  rect(130,85,40,40);
  rect(170,85,40,40);
  rect(210,85,40,40);
  rect(250,85,40,40);
  rect(250,85,40,40);

//rect(x  y  w  h);
*/

}


// functon mousePressed(){
//
// }
