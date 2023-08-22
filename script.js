let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");

function setGradient() {              
	                    
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
//Generating a random set of 3 numbers for each color value 

// function randomNumber(max) {
	
// 		return Math.floor(Math.random() * max);
// 	  }
	//   console.log(randomNumber(256));//This works but isnt what i need)
	
	  function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	  }
	  randomNumber(0,256);
	// Math.floor(Math.random() * (max - min) + min);
	
	
	// while (randomNumber < 4) {
	// 	for (i=0; i < 4; i++ ) {
	// 	color1.value = randomNumber();
	// 	color2.value = randomNumber(); 
	// 	setGradient();
	// 	console.log("Random number is working");
		
	// }
	// return(randomNumber(0, 256));
	// }


//Setting new background after button click

// function randomColor(randomNumber) {
// 	color1.value = randomNumber();
// 	color2.value = randomNumber(); 
// 	setGradient();
// 	setGradient(randomNumber) {

// 	}
 
// }
// randomColor();



	
		
	
	     
		   
// Add event listeners to listen for actions and do the thing

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("document.onload", setGradient());

button.addEventListener("click", randomNumber);






