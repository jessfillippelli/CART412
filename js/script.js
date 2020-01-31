"use strict";





let canvas;
let cell;
let grid=[];
const NUM_COLS = 20;
const NUM_ROWS = 10;
const SPACER = 5;
const CELL_SIZE =40;
//let changeColor =
function preload() {

}




function setup() {
canvas = createCanvas(window.innerWidth, window.innerHeight);
for(let x =0; x< NUM_COLS;x++){
  // do each column
    for(let y =0; y<NUM_ROWS;y++){
      let cell = new Cell((x*CELL_SIZE)+(SPACER*x), (y*CELL_SIZE)+(SPACER*y),CELL_SIZE,CELL_SIZE);

      grid.push(cell);
    }

//trying to change color of squares with mouse over
canvas.mouseOver(changeColor);

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


//change color of squars







  }
  //cell.display();



}


 function changeColor(){
   console.log("hi");
   if (NUM_COLS && NUM_ROWS ===true) {
       fill(255);
     } else {
       fill(50);
     }

 }
