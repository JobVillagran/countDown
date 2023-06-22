// Target New Year's Eve (December 31st)
const targetDate = new Date("December 31, " + new Date().getFullYear() + " 23:59:59").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the countdown values in the HTML
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
