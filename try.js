/*Only supposed to work in the index site*/
document.addEventListener("DOMContentLoaded",function(){
	var initialQuery = "#html-location";
	console.log("Entering the function ");
	var HTMLcontent = document.querySelector(initialQuery);
	console.log(HTMLcontent);
	htmlLoader(initialQuery, "entries/intro.html");
	}
);

/*about to load the introductory HTML of the site*/
var htmlLoader = function(query,filename){
	var xmlhttp = new XMLHttpRequest();
	//console.log("Trying to obtain " + query+" and " +filename);
	xmlhttp.open("GET", filename);		
	xmlhttp.onreadystatechange = function(){
		//console.log("in xmlhttp.onreadystatechange");
		if(this.status === 200 && this.readyState ===4){
			//console.log("The response is: "+ this.responseText);
			console.log(document.querySelector("#main-content"));
			document.querySelector(query).innerHTML = this.responseText;
		}
	}
	xmlhttp.send();
};
/*We still need to load the entries once we load the entries html site*/




