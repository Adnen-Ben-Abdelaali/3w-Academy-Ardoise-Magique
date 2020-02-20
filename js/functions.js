
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

