inputEl = document.getElementById("inpu");
bodyEl = document.querySelector("body");
headerEl = document.querySelector(".header");
containerEl = document.querySelector(".container");
gearEl = document.querySelector(".gear");
bigEl = document.querySelector(".big-image");
firstEl = document.querySelector(".first");
secondEl = document.querySelector(".second");
thirdEl = document.querySelector(".third");
barsEl = document.querySelector(".bars");
divbarsEl = document.querySelector(".divbars");




barsEl.addEventListener("mouseover", ()=>{
    divbarsEl.style.visibility = "visible"
})

barsEl.addEventListener("mouseout", ()=>{
    divbarsEl.style.visibility = "hidden"
})

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
console.log(window.scrollY);

window.addEventListener("scroll", ()=>{
    if(window.scrollY >  containerEl.offsetTop - headerEl.offsetHeight-40){
        headerEl.classList.add("active");
        gearEl.classList.add("active");
    }
    else{
        headerEl.classList.remove("active");
        gearEl.classList.remove("active");
    }
});

firstEl.addEventListener("click", ()=>{
    bigEl.style.backgroundImage = "url(worker2.jpg)"
});
secondEl.addEventListener("click", ()=>{
    bigEl.style.backgroundImage = "url(worker3.jpg)"
});
thirdEl.addEventListener("click", ()=>{
    bigEl.style.backgroundImage = "url(worker4.jpg)"
});

















var imagery=[
    'worker1.jpg',
    'worker2.jpg',
    'worker3.jpg',
    'worker4.jpg',
    'worker5.jpg',
    'worker6.jpg',
];
update();
// let num;
function update(num){
    var num = Math.floor(Math.random()*6);
    bigEl.style.backroundImage = 'url(" '  + imagery[num] +' ")';
    // bigEl.style.backroundImage = `url(${images[num]})`;
    // bigEl.style.backroundImage = "url( ' + images[num] + ' )";

};

setTimeout(()=>{
    update();
}, 1000);