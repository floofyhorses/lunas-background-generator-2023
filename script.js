let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");
//Declare global variables

function setGradient() {               
                    
	body.style.background = //Change background to input colors
	"linear-gradient(to right, " 
	+ color1.value //Grab the colors from the input
	+ ", " 
	+ color2.value //Grab the colors from the input
	+ ")";
	css.textContent = body.style.background + ";"; 
	//Show the current value displayed within the h3 heading
	
}

	 
	 function randomGradient() {//Generate random hexadecimal colors
		let randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
		let randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
		color1.value = randomColor1;
		color2.value = randomColor2;
		
		body.style.background = //Change the gradient to random colors
	"linear-gradient(to right, " 
	+ randomColor1
	+ ", " 
	+ randomColor2 
	+ ")";
	css.textContent = body.style.background + ";";	//Show the current value displayed within the h3 heading

	 }

	
		   
// Add event listeners to listen for actions and do the thing

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("document.onload", setGradient());

button.addEventListener("click", randomGradient);


//Finished for now but imperfect so some correction is needed.

//NOTE: Every few clicks the color pickers fail to match the page
//Console logs: The specified value "#a45ee" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
//It points to the error being at line 25
