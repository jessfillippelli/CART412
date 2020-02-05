"use strict";





let canvas;
let cell;
let grid=[];
const NUM_COLS = 40;
const NUM_ROWS = 19;
const SPACER = 5;
const CELL_SIZE =45;



window.onload = setup;

function setup() {
  let index =0;
for(let x =0; x< NUM_COLS;x++){
  // do each column
    for(let y =0; y<NUM_ROWS;y++){
      let cell = new Cell((x*CELL_SIZE)+(SPACER*x), (y*CELL_SIZE)+(SPACER*y),CELL_SIZE,CELL_SIZE,index);
      index++;
      grid.push(cell);
    }



}

}
