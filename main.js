// let menu = document.querySelector('#menu-btn');
// let navigation = document.querySelector('.navigation');
// menu.onclick = () => {
//     menu.classlist.toggle('fa-times');
//     navbar.classList.toggle('active');
// }
// window.onscroll = () => {
//     menu.classList.remove(' fa-times');
//     menu.classList.remove('active');
// }

var navlinks = document.getElementById("navlinks");
function showmenu() {
    navlinks.style.right = "0";
}
function hidemenu() {
    navlinks.style.right = "-200px";
}

// navigation bar effects on scroll

window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

