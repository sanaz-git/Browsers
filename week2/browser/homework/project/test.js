var timer_counter = 0;
	var how_quick = 90
document.getElementById("t").innerHTML = timer_counter;

console.log(timer_counter);

setInterval(time , how_quick)

function time(){ 
if (timer_counter != 400) {
timer_counter++;
  document.getElementById("t").innerHTML = timer_counter;
console.log(timer_counter);
}
  
else {
   timer_counter = 0;
   time()
}
}

time()