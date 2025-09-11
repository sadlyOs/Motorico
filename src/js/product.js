const data = [
    {
        id: 1,
        img: "/images/products/Image 20-5.png",
        title: "Механический протез",
        desc: "Enhanced mobility with ergonomic support. Ideal for walking and running.",
        disabled: false
    },

    {
        id: 2,
        img: "/images/products/Image 20-5.png",
        title: "Косметический протез",
        desc: "Advanced robotics for precise movements. Seamless integration with neural inputs.",
        disabled: false
    },

    {
        id: 3,
        img: "/images/products/Image 20-2.png",
        title: "Бионический протез",
        desc: "Multi-functional grip for versatile tasks. Compact and lightweight design.",
        disabled: false
    },

    {
        id: 4,
        img: "/images/products/Image 20-4.png",
        title: "Running Prosthesis",
        desc: "Perfect for athletes and active users.",
        disabled: true
    },
]
let srcHtml = ''

data.forEach(item => {
    srcHtml += `<div class="products__item${item.disabled ? ' disabled' : ''}">
                        <div class="products__img">
                            <img src="${item.img}" alt="${item.title}" />
                            <p class="soon">Скоро...</p>
                        </div>
                        <h3>${item.title}</h3>
                        <p>${item.desc.length > 50 ? item.desc.slice(0, 51) + "...": item.desc}</p>
                        <button class="products__btn second__button" id=${item.id}>Learn More</button>
                    </div>`
})
document.getElementById("productList").innerHTML = srcHtml


Array.from(document.querySelectorAll(".products__btn")).forEach(btn => {
    btn.addEventListener('click', (e) => {
        const choiceData = data.filter(item => item.id == e.target.id)[0]
        const detail = document.getElementById("detail")
        const detailContent = document.getElementById('detailContent')
        detail.classList.add("active")
        detailContent.innerHTML = `<div class="products__left">
                                <img src="${choiceData.img}" alt="${choiceData.title}">
                            </div>
                            <div class="products__right">
                                <div class="products__detail-header">
                                    <h3>${choiceData.title}</h3>
                                </div>
                                <div class="products__detail-text">
                                    <p>${choiceData.desc}</p>
                                </div>
                            </div>
                            <div class="products__cancel" id="cancel">
                                <img src="/icons/cancel.svg" alt="cancel">
                            </div>
                            `
        document.getElementById("cancel").addEventListener("click", () => {
            detail.classList.remove("active")
        })
        detail.addEventListener("click", (e) => {
            if (e.target.className === "products__detail-container") {
                detail.classList.remove("active")
            }

            // detail.classList.remove("active")
        })

    })

})
