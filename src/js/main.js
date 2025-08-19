let toggle = false
const burger = document.getElementById("burger")

burger.addEventListener("click", (e) => {
    const phoneMenu = document.getElementById("phoneMenu")
    toggle = !toggle
    document.body.style.overflow = toggle ? "hidden" : ""
    burger.classList.toggle('white')
    phoneMenu.classList.toggle('hide')


})
