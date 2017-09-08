
/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Case Problem 3

   Author: Spandana
   Date: August 7th
   Filename: runpuzzle.js
*
   Global Variables:

   currentX
      Contains the row number of the current puzzle cell

   currentY
      Contains the column number of the current puzzle cell

   currentCell
      References the current puzzle cell

   currentColor
      Contains of the background color of the current puzzle cell

   across
      A Boolean value indicating whether keyboard entry is done
      across the puzzle (true) or down the puzzle (false)

   keyNum
      The keyCode number of the pressed key


   Functions List:

   init()
      Initializes the crossword puzzle and sets up the event handlers

   getKey(e)
      Retrieves the keyCode number of the pressed key and moves the
      current puzzle cell

   writeText(object, text)
      Writes text into the object

   toggleDirection()
      Toggles the direction of keyboard entry

   moveCell(diffX, diffY)
      Moves the current cell diffX columns in the x direction
      and diffY rows in the y direction

   moveCursor()
      Moves the current cell in response to the arrow key pressed
      by the user

   writeGuess()
      Write the keyboard key pressed by the user into the current cell
      and evaluate whether it represents the correct letter or not.

*/

var currentX = 0;
var currentY = 0;
var currentCell;
var across = true;
var currentColor = "white";
var keyNum = 0;


window.onload = init;


function init()
{
  writeClues();
  currentCell = document.getElementById("grid"+ currentX + currentY);
  currentCell.style.backgroundColor = "yellow";
  document.onkeydown = getKey;
}



function getKey(evt)
{
 keyNum = evt.keyCode;
 //currentCell.innerHTML = keyNum;
 if(keyNum == 32)
 {
   toggleDirection();
   return false;
 }
 if (keyNum == 37||keyNum == 38 ||keyNum==39||keyNum==40 )
 {
   moveCursor();
   return false;
 }

 if(keyNum<=90){
   writeGuess();
   return false;
 }
}




function toggleDirection()
{
    if(across == true){
  across = false;
  document.getElementById("handimage").src="across.gif";
}
else{
  across = true;
  document.getElementById("handimage").src="down.gif";
}
}


function moveCell(diffX,diffY){
 currentX = currentX + diffX;
 currentY = currentY + diffY;
if(currentX < 0){
  currentX = 4;
}
if(currentX > 4){
  currentX = 0;
}
if(currentY < 0) {
  currentY = 4;
}
if(currentY>4){
  currentY = 0;
}
currentCell = document.getElementById("grid" + currentX + currentY);
}


function moveCursor()
{
currentCell.style.backgroundColor = currentColor;
if (keyNum == 37){
moveCell(-1,0);
}
if (keyNum == 38) {
  moveCell(0,-1);
}
if (keyNum == 39) {
  moveCell(1,0);
}
if(keyNum == 40){
  moveCell(0,1);
}
currentCell = document.getElementById("grid"+ currentX + currentY);
currentColor = currentCell.style.backgroundColor;
currentCell.style.backgroundColor = "yellow";
}


function writeGuess()
{
  //document.getElementById("grid00").innerHTML = "hello";
var outChar = String.fromCharCode(keyNum);
outChar = outChar.toUpperCase();
writeText(currentCell,outChar);
if(outChar == words[(currentY * 5) + currentX]){
  currentCell.style.backgroundColor = "lightgreen";
}
else {
  currentCell.style.backgroundColor = "pink";
}
if(across == true){
  moveCell(0,1)
}
else {
  moveCell(1,0)
}
currentCell = document.getElementById("grid" + currentX + currentY);
currentColor = currentCell.style.backgroundColor;
currentCell.style.backgroundColor = "yellow";
}
