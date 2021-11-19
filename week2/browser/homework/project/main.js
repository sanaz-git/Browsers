
const up = document.getElementById("up");
const durationEl = document.getElementById("duration");
const down = document.getElementById("down");
let duration = 25;

up.addEventListener("click",function(){
    if(duration == 59){
        duration = 0;
    }
    duration++;
    durationEl.textContent = duration;
   
} );

down.addEventListener("click",() => {
    if(duration < 2){
        duration = 60 ;
    }
    duration--;
    durationEl.textContent = duration;
    
})






















// startTimer********************
// let timer = document.getElementById("time");
// let startTimer = function(){
//     let currentTime = parseFloat(timer.textContent)
//     if (currentTime > 0){
//         timer.textContent = currentTime -1;
//     }else{
//      window.clearInterval(time);
//      timer.textContent = "Time's up!";
//     }    
// }
// let time = window.setInterval(startTimer, 1000)

// let clickIcon = getElementById("play");
// clickIcon.addEventListener("click",startTimer );


// // clickIcon.addEventListener('click', () => {setInterval(startTimer ,1000);},{once: true});

// // document.querySelector('#button').addEventListener('click',startTimer)

// // pauseTimer**************************************
// let pauseTimer = function(){
//     let currentTime = parseFloat(timer.textContent)
//     // if (currentTime > 0){
//     //     timer.textContent = currentTime -1;
//     // }else{
//     //  window.clearInterval(time);
//     //  timer.textContent = "Tim's up!";
//     // }    
// }
// let time = window.setInterval(pauseTimer, 1000)

// let clickIcon = getElementById("pause");
// clickIcon.addEventListener("click",pauseTimer );

// // stopTimer*****************************************
// let stopTimer = function(){
//     let currentTime = parseFloat(timer.textContent)
//     // if (currentTime > 0){
//     //     timer.textContent = currentTime -1;
//     // }else{
//     //  window.clearInterval(time);
//     //  timer.textContent = "Tim's up!";
//     // }    
// }
// let time = window.setTimeOut(stopTimer, 1000)

// const clickIcon = getElementById("stop");
// clickIcon.addEventListener("click",stopTimer );


