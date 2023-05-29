const days = document.getElementById('days');
const hours = document.getElementById('hours');

const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time ;
}


const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;  // milliseconds

    let calSecs = Math.floor(timeDifference/1000) % 60; // seconds
    let calMins = Math.floor(timeDifference/1000/60) % 60; // minutes
    let calHours = Math.floor(timeDifference/1000/60/60) % 24; //hours
    let calDays = Math.floor(timeDifference/1000/60/60/24) % 60; //days

    days.textContent = formatTime(calDays);
    mins.textContent = formatTime(calMins);
    hours.textContent = formatTime(calHours);
    secs.textContent = formatTime(calSecs);



}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000)

}





const targetDate = new Date("June 03 2023 07:00");
countDown(targetDate);