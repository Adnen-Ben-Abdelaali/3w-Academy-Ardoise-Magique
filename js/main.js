"use strict";

let drawing = true;
let positionInitiale = {};



/** gestionnaire des évènements de "Click" sur les boutons 
 de changement d'épaisseur du trait **/

 let traitFin = document.getElementById("traitFin");
 let traitNormal = document.getElementById("traitNormal");
 let traitEpais = document.getElementById("traitEpais");
 
 
 
 traitFin.addEventListener("click", onClickTraitFin);
 traitNormal.addEventListener("click", onCLickTraitNormal);
 traitEpais.addEventListener("click", onClickTraitEpais);
 
 /** gestionnaire des événements pemettant 
	le changment de couleur lors du drawing dans le canvas **/
 
	let blackColor = document.getElementById("blackColor");
	let brownColor = document.getElementById("brownColor");
	let redColor = document.getElementById("redColor");
	let orangeColor = document.getElementById("orangeColor"); 
	let greenColor = document.getElementById("greenColor");
	let vermisselleColor = document.getElementById("vermisselleColor");
	let greenBlueColor = document.getElementById("greenBlueColor");
 
 
 blackColor.addEventListener("click", onClickBlackColor);
 brownColor.addEventListener("click", onClickBrownColor); 
 redColor.addEventListener("click", onClickRedColor);
 orangeColor.addEventListener("click", onClickOrangeColor); 
 greenColor.addEventListener("click", onClickGreenColor);
 vermisselleColor.addEventListener("click", onClickVermisselleColor);
 greenBlueColor.addEventListener("click", onClickBlueColor); 
 
 /** gestionnaire des événements  permettant
	 l'effacement du contenu dessiné dans la balise canvas **/
 
	 let rubber = document.getElementById("rubber");
 
	 rubber.addEventListener("click", onClickRubber);
 
 
 /** gestionnaire des évènements permettant le choix de la 
	* couleur à travers un palette de couleurs   **/	
 
 let eyeDropper = document.getElementById("eyeDropper");
 
 eyeDropper.addEventListener("click", onClickEyeDropper);
 
 