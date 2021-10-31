// function addCurrentTime(){
//     let currentDate = new Date(); 
//     let dateTime = "Last Sync: " + currentDate.getDate() + "/"
//                     + (currentDate.getMonth()+1)  + "/" 
//                     + currentDate.getFullYear() + " @ "  
//                     + currentDate.getHours() + ":"  
//                     + currentDate.getMinutes() + ":" 
//                     + currentDate.getSeconds();
// }

// setInterval(addCurrentTime);



// function addCurrentTime(){
//     var d = new Date();
//     var s = d.getSeconds();
//     var m = d.getMinutes();
//     var h = d.getHours();
//     document.write(h + ":" + m + ":" + s);
// }

// setInterval(addCurrentTime,1000);
function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
 
showTime();