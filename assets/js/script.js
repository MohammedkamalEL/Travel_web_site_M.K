const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add("remove");
})

const addEventElement = function (elments, eventType, callBack) {
    for (let i = 0, len = elments.length; i < len; i++) {
        elments[i].addEventListener(eventType, callBack);
    }
}

// navBar for Mobiel

const navbar = document.querySelector("[data-navbar]");
const navTogeler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggeleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventElement(navTogeler, "click", toggeleNav);


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){

    header.classList[this.window.scrollY > 100 ? "add" : "remove"]("active");

})


function shoeSection(secID) {
    var section = document.querySelectorAll('div[id = "section"]');
    console.log(section);
}
