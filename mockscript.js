// ---------------------------- CORE FUNCTION: Randomize String

function randomize(inputstring){
	var newstring = '';
		for(var i = 0; i < inputstring.length; i++){
			if(Math.random()> 0.5){
				newstring += inputstring.charAt(i); 
			}else{
				var x = inputstring.charAt(i);
				var y = x.toUpperCase(); 
				newstring += y;
			}
		}
	return newstring;
}

// ---------------------------- INPUT create String from User Input Buggy af

// ----------------- For Onclick Event - set String to be mocked
function setInput() {
	var toMockString = document.getElementById("firstline").value;	    
}

// ---------------------------- OUTPUT
