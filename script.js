		function startCount(){
			var timeleft = 1;
			num = document.getElementById("num").value;
			document.getElementById("entry").style.display="none";
			document.getElementById("Halleluyah_bottom").innerHTML= "Halleluyah!";
			var downloadTimer = setInterval(function(){
				if(timeleft >= num){
						clearInterval(downloadTimer);
						document.getElementById("countdown").innerHTML = "Halleluyah!";
						document.getElementById("entry").style.display="block";
						document.getElementById("Halleluyah_bottom").innerHTML= "Total of "+num;
				} 
				else {
						document.getElementById("countdown").innerHTML = timeleft;
				}
				timeleft += 1;
			}, 1050);
		}
		