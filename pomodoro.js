/* let breakIncrementButton = document.getElementById("break-increment");
let breakDecrementButton = document.getElementById("break-decrement");
let sessionIncrementButton = document.getElementById("session-increment");
let sessionDecrementButton = document.getElementById("session-decrement");
let startStopButton = document.getElementById("start_stop");
let resetButton = document.getElementById("reset");

let breakLength = document.getElementById("break-length");
let sessionLength = document.getElementById("session-length");
let timeLeft = document.getElementById("time-left");

let timer;
let timerStatus = "begin";

startStopButton.addEventListener("click", () => {
    if (timerStatus === "begin" || timerStatus === "stopped") {
        timeLeft.innerText = decrementTime(timeString.innerText);
        //START TIMER

        timerStatus = "counting";
        timer = setInterval(() => {
            console.log("tik/toc")
        }, 1000);

        //STOP TIMER

    } else if (timerStatus === "counting") {
        timerStatus = "stopped";
        clearInterval(timer);

    }
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
});

function decrementTime(timeString) {
    let timeDisplay = timeString.split(".");
    let secondDisplay = parseInt(timeDisplay[1]);
    let minuteDisplay = parseInt(timeDisplay[0]);

    secondDisplay -= 1;

    if (secondDisplay === -1){
secondDisplay=59;
minuteDisplay -=1;
    }

    return minuteDisplay + ":" + secondDisplay;
}

*/