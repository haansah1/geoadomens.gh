crewEl = document.querySelector(".crew");
inputEl = document.getElementById("inpu");
bodyEl = document.querySelector("body");
headerEl = document.querySelector(".header");
containerEl = document.querySelector(".container");
gearEl = document.querySelector(".gear");
bigEl = document.querySelector(".big-image");
firstEl = document.querySelector(".first");
secondEl = document.querySelector(".second");
thirdEl = document.querySelector(".third");


inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateMode();
function updateMode(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
        bodyEl.style.color = "white";
    }
    else{
        bodyEl.style.background = "white"
        bodyEl.style.color = "rgb(61, 57, 57)";
    }
}

inputEl.addEventListener("input", ()=>{
    updateMode();
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
};

window.addEventListener("scroll", ()=>{
    if(window.scrollY > crewEl.offsetTop - headerEl.offsetHeight){
        headerEl.classList.add("active")
        gearEl.classList.add("active")
    }
    else{
        headerEl.classList.remove("active")
        gearEl.classList.remove("active")
    }
})
