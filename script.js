
function countingOut()
{ 
	
	
	var date = new Date();
		
		var day = date.getDate();
		if (day<10) day = "0"+day;
		var month = date.getMonth()+1;
		if (month<10) month = "0"+month;
		var year = date.getFullYear();
		
		var hours = date.getHours();
		if (hours<10) hours = "0"+hours;
		
		var minutes = date.getMinutes();
		if (minutes<10) minutes= "0"+minutes;
		
		var seconds = date.getSeconds();
		if (seconds<10) seconds = "0"+seconds;
		
		document.getElementById("clock").innerHTML = day+"-"+month+"-"+year+" "+hours+":"+minutes+":"+seconds;
		 
		 setTimeout("countingOut()",1000);
	
}




 //jesli przycisk jest kliknięty dodanie class w-100