// <div id="timer"></div> to use time with HTML

//update date in setCountDownDate() to set Stop Date




function setNow(){
	var x = new Date().getTime();
  return x;
}

function setCountDownDate(){
	
  return new Date("Jan 13, 2022 11:59:59").getTime();
}

function findDateDifference(countDown,now){
	
  return countDown - now;
}

function convertTime(distance) {
  var days   =  Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours  =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  return [ days, hours, minutes, seconds];
} 

var now = setNow();
var countDown = setCountDownDate();
//convertedTime() returns an ARRAY nuerical values [ day, hours, minutes, seconds]
let convertedTime;
let distance =0;


var tick = setInterval(function(){
  distance = findDateDifference( setCountDownDate(), setNow() );
  convertedTime = convertTime(distance);
 
  document.getElementById("timer").innerHTML = convertedTime[0] + "d " + convertedTime[1] + "h "+ convertedTime[2] + "m " + convertedTime[3] + "s ";
  
  if (distance <= 0) {
    document.getElementById("timer").innerHTML = "Join Us Next time!";
    
    clearInterval(tick);
  }
}, 1000);
