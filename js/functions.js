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

    ctx.beginPath();
    
    ctx.moveTo(positionInitiale.x, positionInitiale.y);
    ctx.lineTo(ev.offsetX, ev.OffsetY);
    ctx.stroke();
    ctx.closePath();
   /* 
   alert(`positionInitialeX = ${positionInitiale.x}, 
    positionInitialeY = ${positionInitiale.y} 
    ev.offsetX = ${ev.offsetX}, ev.offsetY = ${ev.offsetY}
    `);
    */
   
  
  
}

function onMouseOut(ev) {
  
  drawing = false;
}

function onMouseUp(ev) {
  
  drawing = false;
}

function onClickTraitFin() {
  // alert("hello FIN ");
  ctx.lineWidth = "3";
}

function onCLickTraitNormal() {
  // alert("hello Normal");
  ctx.lineWidth = "7";
}

function onClickTraitEpais() {
  // alert("hello Epais");
  ctx.lineWidth = "12";
}


function onClickBlackColor() {
  // alert("hello Black");
  ctx.stokeStyle = "black";
}

function onClickBrownColor() {
  // alert("hello Brown");
  ctx.strokeStyle = "#602627";
} 

function onClickRedColor() {
  // alert("hello RED");
  ctx.strokeStyle = "#c01525";
}

function onClickOrangeColor() {
  // alert("hello  Orange");
  ctx.strokeStyle = "ffbb38";
} 

function onClickGreenColor() {
  // alert("hello Green");
  ctx.strokeStyle = "#00b635";
}

function onClickVermisselleColor() {
  // alert("hello Vermisselle COLOR ");
  ctx.strokeStyle = "#009d98";
}

function onClickBlueColor() {
  // alert("hello blue color");
  ctx.strokeStyle = "#0078a2";
} 

function onClickRubber() {
  // alert("hello RUBBER");
  ctx.clearRect(0, 0, parseFloat(canv.getAttribute("width")), parseFloat(canv.getAttribute("height")));
}

function onClickEyeDropper() {
  // alert("hello Eye dropper");
}


