// COUNTDOWN TIMER 

// Sets the date that we're counting down to 
const countDownDate = new Date('November 16, 2022 00:00:00').getTime();

// Connects the HTML ids to some JavaScripts variables we will use later
const weekElement = document.getElementById('weeks');
const dayElement = document.getElementById('days');
const hourElement = document.getElementById('hours');
const minuteElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');
const dayCountElement = document.getElementById('dayCounter');

// Updates the count down after every 1 second
const birthdayTimer = setInterval(function() {

    //Gets the current date and time
    const currentTime = new Date().getTime();

    //Calculates the distance between the current time and the count down date
    const distance = countDownDate - currentTime;

    //Calculations for weeks, days, hours, minutes, and seconds
    const weeks = Math.floor(distance / (1000 * 60 * 60 * 24) / 7);
    const days = Math.floor((distance / (1000 * 60 * 60 * 24) / 7) % 7);
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));

    //Displays the result using the HTML
    weekElement.innerHTML = weeks;
    dayElement.innerHTML = days;
    hourElement.innerHTML = hours;
    minuteElement.innerHTML = minutes;
    secondElement.innerHTML = seconds;
    dayCountElement.innerHTML = totalDays;

    //When countdown is done the header will reflect that
    if (distance < 0) {
        clearInterval(birthdayTimer);
        document.getElementById("partyTitle").innerHTML = "Until Next Year..."
    }
}, 1000);

// Runs the function
birthdayTimer()