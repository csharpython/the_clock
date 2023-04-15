var clockes;
function clockUpdate(){
	clockes = new Date().toLocaleString();
	document.getElementById("time").innerHTML = clockes;
}
setInterval('clockUpdate()',1000);