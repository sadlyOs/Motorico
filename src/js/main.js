import * as test from './faq.js'
import * as header from './header.js'
import * as foote from './footer.js'

let toggle = false
const burger = document.getElementById("burger")

burger.addEventListener("click", (e) => {
    const phoneMenu = document.getElementById("phoneMenu")
    toggle = !toggle
    burger.style.position = toggle ? "fixed" : "relative"
    burger.style.right = toggle ? "15px" : "0"
    burger.classList.toggle('white')
    phoneMenu.classList.toggle('hide')
})

Array.from(document.querySelectorAll('.header__select')).forEach(select => {
    select.addEventListener("click", () => {
        const selectLists = document.querySelectorAll(".select__list")
        selectLists.forEach(selectList => {
            selectList.classList.toggle("active")
            select.classList.toggle("active")
        })
        Array.from(document.querySelectorAll(".select__item")).forEach(option => {
            option.addEventListener('click', (e) => {
                console.log(e.target.textContent.trim());
                console.log(option);

                Array.from(document.querySelectorAll(".select__head")).forEach(selectText => {
                    selectText.textContent = e.target.textContent.trim()
                })
            })
        })
    })
})
