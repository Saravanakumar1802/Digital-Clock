function clock() {
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let hr = new Date().getHours() % 12;
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

    var interval = setInterval(clock, 1000)
}
clock()