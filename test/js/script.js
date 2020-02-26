"use strict";





let canvas;
let cell;
let grid=[];
const NUM_COLS = 40;
const NUM_ROWS = 19;
const SPACER = 5;
const CELL_SIZE =45;
let counter_q =0;
 let counter_e =0;
 let counter_r =0;



window.onload = setup;

function setup() {

  document.addEventListener('keydown', changeThem);



  let colorArray = ["#D1D869", "#8ACFB9", "#B2D456", "#6CC28A", "#98BF62", "#71B744",
  "#35B44C", "#15AB4B", "#728C6A", "#597D38", "#088A44", "#354A23"];


  let index =0;
for(let x =0; x< NUM_COLS;x++){
  // do each column
    for(let y =0; y<NUM_ROWS;y++){
      let cell = new Cell((x*CELL_SIZE)+(SPACER*x), (y*CELL_SIZE)+(SPACER*y),CELL_SIZE,CELL_SIZE,index);
      index++;
      grid.push(cell);
    }



}

function changeThem(){
  // key q
  console.log(event.keyCode);
  if(event.keyCode ===81 ){
    counter_q = counter_q+1;
    for(let i =0; i<grid.length;i++){

// if counter is odd make it black else make it green
     if(counter_q%2 ===1 && i%2===1){
      grid[i].cellColor = "green";
    }
    else if(counter_q%2 ===1 && i%2===0){
     grid[i].cellColor = "black";
   }
    // else if(counter_q%2 ===0 && i%2===1) {
    //     grid[i].cellColor = "black";
    // }
    // else{
    //     grid[i].cellColor = "green";
    // }
      grid[i].boxElement.style.background = grid[i].cellColor;
    }

  } //end of 81

//one black square and one green till the end


if(event.keyCode ===87){
  //key w
    for(let i =0; i<grid.length;i++){
      let colorChoice = i%colorArray.length;
      grid[i].cellColor = colorArray[colorChoice];
      grid[i].boxElement.style.background = grid[i].cellColor;

    }
//the array of colors fuction
}// end of 87

if(event.keyCode ===69){
  // counter_e = counter_e+1;
  for(let i =0; i<grid.length;i++){

// if counter is odd make it black else make it green
   if(i%12===0){
    grid[i].cellColor = "green";
  }
  else {
   grid[i].cellColor = "black";
 }

    grid[i].boxElement.style.background = grid[i].cellColor;
  }

} //end of 69

if(event.keyCode ===82){
  //counter_r = counter_r+1;
  for(let i =0; i<grid.length;i++){


   if(i%12===0){
    grid[i].cellColor = "black";
  }
  else {
    let colorChoice = i%colorArray.length;
    grid[i].cellColor = colorArray[colorChoice];

 }

    grid[i].boxElement.style.background = grid[i].cellColor;
  }

} //end of 82








} //end of changeThem
}//end of set up
