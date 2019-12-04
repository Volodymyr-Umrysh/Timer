let time = document.querySelector('.time');
let date = document.querySelector('.date');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let num1 = document.querySelector('.num1');
let showTime = document.querySelector('.showTime');
let timerStart = document.querySelector('.timerStart');
let timerStop = document.querySelector('.timerStop');
let timerReset = document.querySelector('.timerReset');
let loop = document.querySelector('.loop');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

plus.onclick = function () {
    num1.value++;
    if (num1.value > 0) {
        minus.disabled = false;
    }
}
minus.onclick = function () {
    num1.value--;
    if (num1.value == 0) {
        minus.disabled = true;
    }
}

function zeros(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
let check;
let count;
let x = 0;
let y;
timerStart.onclick = function () {
    timerStart.disabled = true;
    if (x == 0) { count = num1.value * 60; };
    if (x > 0) { count = y };
    check = setInterval(() => {
        count = count - 1;
        y = count;
        let minutes = zeros(Math.floor(count / 60));
        let seconds = zeros(count - minutes * 60);
        if (num1.value == 0) {
            alert('Час вийшов')
        }
        if (count < 0) {
            return;
        }
        totalTime = minutes + ':' + seconds;
        document.getElementById('showTime').innerHTML = totalTime
    }, 1000);
}

timerStop.onclick = function () {
    timerStart.disabled = false;
    clearInterval(check);
    x = x + 1;

}
timerReset.onclick = function () {
    document.getElementById('showTime').innerHTML = '00:00';
    x = 0;
}


setInterval(() => {
    let tm = new Date();
    let h = tm.getHours();
    let m = tm.getMinutes();
    let s = tm.getSeconds();
    if (h < 10) { h = '0' + h };
    if (m < 10) { m = '0' + m };
    if (s < 10) { s = '0' + s };
    time.textContent = `${h}:${m}:${s}`;
});
setInterval(() => {
    let tm = new Date();
    let d = tm.getDate();
    let m = tm.getMonth();
    let y = tm.getFullYear();
    if (d < 10) { d = '0' + d };
    if (m < 10) { m = '0' + m };

    date.textContent = `${d}.${m}.${y}`;
});


let new_date = 0;
function goStopW() {
    new_date=new_date + 4;
    let mill = parseInt((new_date % 1000) / 100);
    let sec = Math.abs(Math.floor(new_date / 1000) % 60);
    let min = Math.abs(Math.floor(new_date / 1000 / 60) % 60);
    let hours = Math.abs(Math.floor(new_date / 1000 / 60 / 60) % 24);
    if (sec.toString().length == 1) sec = '0' + sec;
    if (min.toString().length == 1) min = '0' + min;
    if (hours.toString().length == 1) hours = '0' + hours;
    document.getElementById('sec').innerHTML = hours + ':' + min + ':' + sec + ':' + mill;
}



let check1;
document.getElementById('sec').innerHTML = '00:00:00:00';
start.onclick = function () {
    start.disabled = true;
    loop.disabled = false;
    goStopW();
    check1 = setInterval(goStopW);

};

stop.onclick = function () {
    start.disabled = false;
    loop.disabled = true;
    clearInterval(check1);
}
reset.onclick = function () {
    document.getElementById('sec').innerHTML = '00:00:00:00';
    new_date = 0;
}
loop.onclick = function () {
    let boxLoop = document.getElementById('boxLoop');
    let p = document.createElement('p');
    p.innerHTML = document.getElementById('sec').innerHTML;

    boxLoop.appendChild(p);

}