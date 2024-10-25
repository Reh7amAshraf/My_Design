// Set the end date for the countdown (use a proper date format)
var countdownDate = new Date("May 5, 2025 11:30:00").getTime();

// Update the countdown every second
var countdownFunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    // Calculate time left
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % 1000 * 60) / 1000);

    // Display the result in the elements with corresponding ids
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished, display "EXPIRED"
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").innerHTML = "<p>EXPIRED</p>";
    }
}, 1000);
