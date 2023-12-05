let nav_is_active = false;
const nav = document.getElementById("navbar");
const nav_icon = document.querySelector("#nav-toggle i");
const nav_toggle = document.getElementById("nav-toggle");

function open_nav() {
    nav_is_active = true;
    nav.style.display = "flex";
    nav_toggle.classList.toggle("active");

}

function close_nav() {
    nav_is_active = false;
    nav.style.display = "none";
    nav_toggle.classList.toggle("active");
}

function toggle_nav() {
    if (nav_is_active) {
        close_nav();
    } else {
        open_nav();
    }
}
