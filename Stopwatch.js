var hour_count = 0;
var minutes_count = 0;
var seconds_count = 0;
var printer = null;
function displayTime(){
    var container  = document.getElementsByClassName("hour-container")[0];
    container.innerHTML = hour_count <= 9 ? "0"+hour_count : hour_count;
    var container1  = document.getElementsByClassName("minute-container")[0];
    container1.innerHTML = minutes_count <=9 ? "0"+minutes_count : minutes_count;
    var container3  = document.getElementsByClassName("seconds-container")[0];
    container3.innerHTML = seconds_count <=9 ? "0"+seconds_count : seconds_count;
}
function startTimer(){
    printer = setInterval(()=>{
        seconds_count++;
        if(seconds_count == 60){
            minutes_count++;
            seconds_count=0;
            if(minutes_count == 60){
                hour_count++;
                minutes_count=0;
            }
        }
        displayTime();
    },1000)
}
function stopTimer(){
    clearInterval(printer);
}
function resetTimer(){
    hour_count = 0;
    minutes_count =0;
    seconds_count =0;
    displayTime();
}
displayTime();