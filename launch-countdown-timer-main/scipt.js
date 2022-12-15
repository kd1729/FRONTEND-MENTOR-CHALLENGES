
var timer = setInterval(function() {

const destination = new Date("2024-01-01T00:00:00");
const current = new Date();

const diff = (destination .getTime() - current.getTime()) / 1000;

const months = 12 - current.getMonth() - 1;

const x = new Date(current.getFullYear(), current.getMonth(), 0).getDate();
const y = new Date(current.getFullYear(), current.getMonth(), current.getDate()).getDate();

const days = x - y;
const hours = Math.floor(diff % (24 * 60 * 60) / (60 * 60));
const minutes = Math.floor(diff % (60 * 60) / 60);
const seconds = Math.floor(diff % 60);

document.getElementById("seconds").innerText = seconds;
document.getElementById("minutes").innerText = minutes;
document.getElementById("hours").innerText = hours;
document.getElementById("days").innerText = days;
document.getElementById("months").innerText = months;
}, 1000);


