alert("Welcome to the Photo Gallery!");
// // objects --> Key Value pairs

// define the mode button and current mode
let Gallery = document.querySelector(".Photo-Library");
let body = document.querySelector("body");
let searchBar = document.querySelector(".Search");
let projectShowcases = document.querySelector(".Project showcases");
let contactForm = document.querySelector(".Contact Form");
let testimonials = document.querySelector(".Testimonials");
let header = document.querySelector(".header-content");
let footer = document.querySelector(".footer");

let modeBtn = document.querySelector("#Mode");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    modeBtn.textContent = document.body.classList.contains("darkmode") ? "Light Mode" : "Dark Mode";
    
});

