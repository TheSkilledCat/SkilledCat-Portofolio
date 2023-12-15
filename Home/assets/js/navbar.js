const nav = document.querySelector(".navbar");
const nav_icon = document.querySelector("#nav-toggle i");
const nav_toggle = document.getElementById("nav-toggle");
const hamburger = document.querySelector(".hamburger");


function toggle_nav() {
    nav.classList.toggle("active")
    nav_toggle.classList.toggle("active");
    hamburger.classList.toggle("is-active");
}