const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minutesEL = document.getElementById('minutes');
const secondsEL = document.getElementById('seconds');

const departingDate = '3 Aug 2021';

function formatTime(time) {
    if(time < 10) {
        return `0${time}`;
    } else {
        return time;
    } 
}

function countdown() {
    const departureDate = new Date(departingDate);
    const currentDate = new Date();

    const totalSeconds = (departureDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = formatTime(days);
    hoursEL.innerHTML = formatTime(hours);
    minutesEL.innerHTML = formatTime(minutes);
    secondsEL.innerHTML = formatTime(seconds);
}

//initial call
countdown();

setInterval(countdown, 1000);
