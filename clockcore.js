var clockes;
const TIME_ZONE = -(new Date('August 19, 1975 0:00:00 GMT+00:00').getTimezoneOffset())/60;
document.getElementById("timezone").innerHTML = "Timezone : GMT + "+TIME_ZONE+"hours";
function clockUpdate(){
	clockes = new Date().toLocaleString();
	document.getElementById("time").innerHTML = clockes;
}
setInterval('clockUpdate()',1000);