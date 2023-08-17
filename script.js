let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function getInitialGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

  document.onload(getInitialGradient()); //This makes picker same color as
                                        //Initial bg and makes h3 say the 
										//initial color.

  function setGradient() {              //I want to make it so that the
	                                    //color picker once more changes
										//the color of the gradient, and
										//makes the h3 say that value instead.
	body.style,background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// function setTextOnLoad() {     //2. Display the initial CSS linear gradient 
// 	//property on page load. Trying, not working yet//
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ body;

// 

body.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// windows.onload("onload", setTextOnLoad); //2. Display the initial CSS linear gradient 
// //property on page load. Trying, not working yet//