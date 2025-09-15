const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00.00";
}

function update() {
    elapsedTime = Date.now() - startTime;
    let time = new Date(elapsedTime);
    let minutes = time.getUTCMinutes().toString().padStart(2, "0");
    let seconds = time.getUTCSeconds().toString().padStart(2, "0");
    let milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, "0");
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}