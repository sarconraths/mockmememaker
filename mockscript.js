// ----------------- INPUT PLACEHOLDERS

var toppl = "Top line";
var bottompl = "Bottom line";

document.getElementById("firstline").placeholder = toppl; 
document.getElementById("secondline").placeholder = bottompl; 

// ----------------- EVENT LISTENERS

document.getElementById("start").addEventListener("click", randomizeTop);
document.getElementById("start").addEventListener("click", randomizeBottom);

document.getElementById("start").addEventListener("click", disableStart);
document.getElementById("start").addEventListener("click", disableStart);

document.getElementById("shuffle").addEventListener("click", randomizeTop);
document.getElementById("shuffle").addEventListener("click", randomizeBottom);

//---------------------------- CORE FUNCTION: Randomize String Top Line

function randomizeTop(){
	if(!document.getElementById("firstline") == ""){
		var torandom = document.getElementById("firstline").value; 
	}	
	var newstring = '';
		for(var i = 0; i < torandom.length; i++){
			if(Math.random()> 0.5){
				newstring += torandom.charAt(i); 
			}else{
				var x = torandom.charAt(i);
				var y = x.toUpperCase(); 
				newstring += y;
			}
		}		
	document.getElementById("outputtop").innerHTML = newstring; 
	return newstring;
}

//---------------------------- CORE FUNCTION: Randomize String Bottom Line

function randomizeBottom(){
	if(!document.getElementById("secondline") == ""){
		var torandom = document.getElementById("secondline").value; 
	}	
	var newstring = '';
		for(var i = 0; i < torandom.length; i++){
			if(Math.random()> 0.5){
				var a = torandom.charAt(i);
				var b = a.toLowerCase();
				newstring += b; 
			}else{
				var x = torandom.charAt(i);
				var y = x.toUpperCase(); 
				newstring += y;
			}
		}		
	document.getElementById("outputbottom").innerHTML = newstring; 
	return newstring;
}

//---------------------------- SIDE FUNCTION: Disable Start-Button after first time

function disableStart() {
	document.getElementById("start").removeEventListener("click", randomizeTop);
	document.getElementById("start").removeEventListener("click", randomizeBottom);
}


0.2:

Reactivate start Button on change of input fields:
 - user puts in text, clicks mock me. changes text - mock me won't work. This needs fixing for sure. 
 - also if he decides to add a top line, mock me must work. Mock me must work whenever something in the input area is changed
Make "shuffle" work only for the text that has been sent through the "mock me" button
 - possibly create variable that is independent from the onclick event?
 - so: User input, "mock me" - text appears in picture. User changes input, decides he wants to keep the original - but if he presses shuffle, 
	 the new input will be used. Instead I want to use what is already there
Make mock work for uppercase strings (add a "if...-> char uppercase", "else...-> char lowercase"), this should be simple enough


