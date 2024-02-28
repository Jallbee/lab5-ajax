function changeOpacity(){
	var images = document.getElementsByTagName('img');
	for (var i = 0; i <images.length; i++) 
		{images [i].style.opacity = 0.5;}
}

function loadData(filePath){
	var xhttp = new XMLHttpRequest();
	if(this.readyState == 4 && this.status == 200)
	{ document.getElementsById ("details").innerHTML = this.responseText;}
;
xhttp.open("GET",filePath,true);
xhttp.send();
}

documnet.getElementsById("donQuixoteImage").addEventListener
("click",function(){loadData("cervantes-data.html");
changeOpacity();this.style.opacity = 1;});

documnet.getElementsById("taleOfTwoCitiesImage").addEventListener
("click",function(){loadData("dickens-data.html");
changeOpacity();this.style.opacity = 1;});

documnet.getElementsById("lordOfTheRingsImage").addEventListener
("click",function(){loadData("tolkien-data.html");
changeOpacity();this.style.opacity = 1;});