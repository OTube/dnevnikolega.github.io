var point = localStorage.getItem("pointvalue")
  	document.getElementById("pt").innerHTML = point;
  	alert(point);
	function increaser()
	{
		point++;
		document.getElementById("pt").innerHTML = point;
		localStorage.setItem("pointvalue", point);
	}
