"use strict";

let canv = document.getElementById("ardoiseCanvas");
let ctx = canv.getContext("2d");


ctx.lineWidth = "15";
ctx.strokeStyle = "black";
/** gestionnaires d'évènements permettant le dessin dans le canvas***/

canv.addEventListener("mousedown", onMouseDown);
canv.addEventListener("mousemove", onMouseMove);
canv.addEventListener("mouseout", onMouseOut);
canv.addEventListener("mouseup", onMouseUp);
