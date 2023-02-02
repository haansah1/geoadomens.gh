cardEl = document.querySelectorAll(".card")
sectionEl = document.querySelectorAll(".section")
imgEl = document.querySelector("img")
iEl = document.querySelector("i")
inputEl = document.getElementById("check")

imgEl.addEventListener("click", ()=>{
    // imgEl.classList.add("")
    // imgEl.style.borderRadius = "5px";
    imgEl.classList.add("active")
})


iEl.addEventListener("click", ()=>{
    imgEl.classList.remove("active")
    // imgEl.classList.add(".img")

})



// inputEl.addEventListener("input", ()=>{
//     if(input.checked){
//         imgEl.classList.add("active")
//     }
//     else{
//         imgEl.classList.remove("active")
//     }
// })

