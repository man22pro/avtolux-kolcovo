const burgerMenuBtnAL = document.querySelector("#burger-menu-btn")
const burgerMenuAL = document.querySelector("#burger-menu")
const burgerMenuCloseAL = document.querySelector("#burger-menu-close")


burgerMenuBtnAL.addEventListener("click", () => {
    burgerMenuAL.style.top = "86px"
    
})

burgerMenuCloseAL.addEventListener("click", () => {
    burgerMenuAL.style.top = "-200px"
})

