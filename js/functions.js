"use strict";

function onMouseDown(ev)  {
 // alert("hello mousedown");
 let xOffset = ev.offsetX;
 let yOffset = ev.offsetY;
 
 //alert(`xCoordinate = ${xOffset}, yCoordinate = ${yOffset}`);

positionInitiale = {x: xOffset, y: yOffset}
 drawing = true;
// alert(`drawing ${drawing}`);

}

function onMouseMove(ev) {

  if(drawing)
  {
    ctx.beginPath();
    ctx.moveTo(positionInitiale.x, positionInitiale.y);
    ctx.lineTo(ev.offsetX, ev.offsetY);
    ctx.stroke();
    ctx.closePath();
    positionInitiale = {x: ev.offsetX, y: ev.offsetY}
    /*console.log(`positionInitialeX = ${positionInitiale.x}, 
    positionInitialeY = ${positionInitiale.y} 
    ev.offsetX = ${ev.offsetX}, ev.offsetY = ${ev.offsetY}
    `);*/
  }
}

function onMouseOut(ev) {
  
  drawing = false;
}

function onMouseUp(ev) {
  
  drawing = false;
}



function onClickRubber() {
  // alert("hello RUBBER");
  ctx.clearRect(0, 0, parseFloat(canv.getAttribute("width")), parseFloat(canv.getAttribute("height")));
}

function onClickEyeDropper() {
  // alert("hello Eye dropper");
}

function onClickBoutonListeCouleur() {
  ctx.strokeStyle = this["dataset"]["linecolor"];
}

function onClickBoutonEpaisseurTrais() {
  
  ctx.lineWidth = this["dataset"]["linewidth"];
}