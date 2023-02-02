pEl = document.querySelector("p")
imgEl = document.querySelector("img");


imgEl.addEventListener("mouseover", ()=>{
    pEl.style.opacity = 1;
    pEl.style.transform = "translateX(20px)"
    pEl.style.display = ""
})

imgEl.addEventListener("mouseout", ()=>{
    pEl.style.opacity = 0;
    pEl.style.transform = "translateX(-20px)"
    pEl.style.display = "none"
})

