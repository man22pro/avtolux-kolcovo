const burgerMenuBtnAL = document.querySelector("#burger-menu-btn")
const burgerMenuAL = document.querySelector("#burger-menu")
const burgerMenuCloseAL = document.querySelector("#burger-menu-close")

burgerMenuBtnAL.addEventListener("click", () => {
    burgerMenuAL.style.top = "4px";
})

burgerMenuCloseAL.addEventListener("click", () => {
    burgerMenuAL.style.top = "-500px"
})

