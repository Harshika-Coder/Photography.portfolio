// alert("Welcome to the Photo Gallery!");
// // objects --> Key Value pairs

// define the mode button and current mode
const Gallery = document.querySelector(".Photo-Library");
const currMode = "Light";
const header = document.querySelector(".header-content");

let modeBtn = document.querySelector("#Mode");

modeBtn.addEventListener("click", () => {
    if(currMode === "Light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    
});

let seLct = document.querySelector(".Photo-Library");
seLct.addEventListener("click", () => {
    if(currMode === "Light"){
        currMode = "dark";
        Gallery.style.backgroundColor = "black";
    }
    else{
        currMode = "Light";
        Gallery.style.backgroundColor = "White";
    }
});

let seLct1 = document.querySelector(".header-content");
seLct1.addEventListener("click", () => {
    if(currMode === "dark"){
        currMode = "Light";
        header.style.backgroundColor = "white";
    }
    else{
        currMode = "dark";
        header.style.backgroundColor = "black";    
    }
    console.log("Header clicked, mode changed to: " + currMode);
});

