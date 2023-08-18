let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector(".button");

function setGradient() {              
	                    
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomNumber(min,max) {
	min = Math.ceil(min);
    max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
	
}



window.addEventListener("document.onload", setGradient())

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomNumber);

