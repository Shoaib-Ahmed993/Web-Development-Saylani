//setInterval() repeatively running
//setTimeout() after sometime


// var count = 0;
// var interval;
// function timer (){
//     count++;
//     console.log(count);
// }
// interval = setInterval(timer,1000);
// setTimeout(function(){
//     clearInterval(interval)
// },5000)
// function timeOut(){
//     console.log("running!")
// }
// setTimeout(timeOut,3000)


var min = 0;
var sec = 0;
var msec = 0;
var interval;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60){
        min++;
        sec = 0;
        minHeading.innerHTML = min;
    }
}
function start(){
    interval = setInterval(timer,10);
}
function stop(){
    clearInterval(interval)
}
function reset(){
    min = 0;
    msec = 0;
    sec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
}
function disabledBtn(){
    var btn = document.getElementById("start");
    btn.disabled = true;
}

