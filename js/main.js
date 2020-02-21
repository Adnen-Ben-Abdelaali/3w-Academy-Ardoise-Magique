"use strict";


let canv = document.getElementById("ardoiseCanvas");
let ctx = canv.getContext("2d");

let drawing = false;
let positionInitiale = {};
let colorPicker = new Array();
let epaisseurTrai = new Array();
ctx.lineWidth = "15";
ctx.strokeStyle = "black";

canv.addEventListener("mousedown", onMouseDown);
canv.addEventListener("mousemove", onMouseMove);
canv.addEventListener("mouseout", onMouseOut);
canv.addEventListener("mouseup", onMouseUp);



/** gestionnaire des évènements de "Click" sur les boutons 
 de changement d'épaisseur du trait **/

let boutonEpaisseurTrais = document.getElementsByClassName("boutonEpaisseurTrais");

console.log(boutonEpaisseurTrais);

for(let elt of boutonEpaisseurTrais)
{
	elt.addEventListener("click", onClickBoutonEpaisseurTrais);
}

/** gestionnaire des événemets permettant le choix de la couleur 
 de dessin dans le canvas lors du click **/

 let boutonListeCouleur = document.getElementsByClassName("boutonListeCouleur");
  
 console.log(boutonListeCouleur);

 for(let element of boutonListeCouleur) {
		console.log(element);
		element.addEventListener("click", onClickBoutonListeCouleur);
	 
 }

  
 /** gestionnaire des événements  permettant
	 l'effacement du contenu dessiné dans la balise canvas **/
 
	 let rubber = document.getElementById("rubber");
 
	 rubber.addEventListener("click", onClickRubber);
 
 
 /** gestionnaire des évènements permettant le choix de la 
	* couleur à travers un palette de couleurs   **/	
 
 let eyeDropper = document.getElementById("eyeDropper");
 
 eyeDropper.addEventListener("click", onClickEyeDropper);
 

 