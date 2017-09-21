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


//document.getElementById("poutput").innerHTML = "Please enter something";


function setInput() {
	document.getElementById("poutput").innerHTML = "hello";
}

//	document.getElementById("secondline").value; 

document.getElementById("start").addEventListener("click", setInput());
document.getElementById("poutput").innerHTML = torandom; 
