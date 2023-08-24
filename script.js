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


	  

	 function randomValue() {
		    let r = Math.floor(Math.random() * 256);
		    let g = Math.floor(Math.random() * 256);
			let b = Math.floor(Math.random() * 256);
			return "rgb(" + "#" + r+r+g+g+b+b + ")";
		                  
	
	     }
		 randomValue();
	///The above works!
		
	  
	//   randomValue();
	//   setGradient(randomValue);  //HERE IS IS WHERE THE CODE BREAKS
	  //TypeError: Cannot read properties of null (reading 'styl
	 
	 function randomGradient() {
		let randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
		let randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
		color1.value = randomColor1;
		color2.value = randomColor2;
		
		body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor1
	+ ", " 
	+ randomColor2 
	+ ")";
	css.textContent = body.style.background + ";";

	 }

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

button.addEventListener("click", randomGradient);






