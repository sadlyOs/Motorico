let toggle = false
const burger = document.getElementById("burger")
const select = document.getElementById("select")

burger.addEventListener("click", (e) => {
    const phoneMenu = document.getElementById("phoneMenu")
    toggle = !toggle
    document.body.style.overflow = toggle ? "hidden" : ""
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