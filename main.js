window.onload = function () {
    let seconds = 00;
    let tens = 00;
    let minutes = 00;
    let hours = 00;
    const appendTens = document.getElementById("tens");
    const appendSeconds = document.getElementById("seconds");
    const appendMinutes = document.getElementById("minutes");
    const appendHours = document.getElementById("hours");
    const buttonStart = document.getElementById("button-start");
    const buttonStop = document.getElementById("button-stop");
    const buttonReset = document.getElementById("button-reset");

    let Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    }

    const startTimer = () => {
        tens++

        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9) {
            appendTens.innerHTML = tens;
        }
        if(tens > 99) {
            console.log("seconds");
            seconds ++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59) {
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if(minutes > 59) {
            console.log("hours");
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = 0;
            appendMinutes.innerHTML = "0" + 0;
        }
    }    
}