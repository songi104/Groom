const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnReset = document.getElementById('btn-reset');
const btnRecord = document.getElementById('btn-record');
const recordsList = document.getElementById('records-list');

let seconds = 0;
let tens = 0;
let interval;

btnStart.onclick = function() {
    interval = setInterval(startTimer, 10);
}

function startTimer() {
    tens ++;

    if (tens > 99) {
        tens = 0;
        seconds ++;
        appendSeconds.innerText = seconds;
    } else {
        appendTens.innerText = tens;
    }
}

btnStop.onclick = function() {
    clearInterval(interval);
}

btnReset.onclick = function() {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    appendSeconds.innerText = seconds;
    appendTens.innerText = tens;
}

btnRecord.onclick = function() {
    let record = document.createElement('li');
    record.innerText =`${seconds}:${tens}`;
    recordsList.appendChild(record);
}