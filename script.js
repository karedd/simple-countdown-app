const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newVacation = "10 January 2022"

function countdown() {
    const newVacationDate = new Date(newVacation);
    const currentDate = new Date();

    const totalSeconds = (newVacationDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes; 
    secondsEl.innerHTML = seconds;
}


countdown();

setInterval(countdown, 1000);
