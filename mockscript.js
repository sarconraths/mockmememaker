if(!document.getElementById("firstline") == ""){
	var torandom = document.getElementById("firstline").value; 
}else{
	var torandom = "to appear here"; 
}


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
	document.getElementById("poutput").innerHTML = newstring; 
	return newstring;
}



//	document.getElementById("secondline").value; 


