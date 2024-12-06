// script.js
document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();

    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const weekdayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    // Get elements
    const monthElement = document.getElementById("month");
    const dayElement = document.getElementById("day");
    const weekdayElement = document.getElementById("weekday");
    const yearElement = document.getElementById("year");

    // Populate elements in sequence
    monthElement.textContent = monthNames[date.getMonth()];
    weekdayElement.textContent = weekdayNames[date.getDay()];
    dayElement.textContent = date.getDate();
    yearElement.textContent = date.getFullYear();
});
