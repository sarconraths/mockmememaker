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
				newstring += torandom.charAt(i); 
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


