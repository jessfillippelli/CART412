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

function preload() {

}


// setup()
//
// Description of setup

function setup() {
canvas = createCanvas(window.innerWidth, window.innerHeight);

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

//location: x and y,
  rect(10,5,20,18);
//rect(x  y  w  h);

}
