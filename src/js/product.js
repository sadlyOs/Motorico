const data = [
    {
        id: 1,
        img: "../assets/images/products/Image 20.png",
        title: "Arm Prosthesis",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, officiis, hic eveniet in facilis illo commodi aut architecto velit similique quo, exercitationem aperiam ad porro ipsam iure expedita. Fuga saepe ducimus voluptates nobis consequuntur. Consequuntur? dfdfsfsdfsdfsdfsfsdfdsf"
    },

    {
        id: 2,
        img: "../assets/images/products/Image 20-1.png",
        title: "Leg Prosthesis",
        desc: "Enhanced mobility with ergonomic support. Ideal for walking and running."
    },

    {
        id: 3,
        img: "../assets/images/products/Image 20-2.png",
        title: "Hand Prosthesis",
        desc: "Multi-functional grip for versatile tasks. Compact and lightweight design."
    },

    {
        id: 4,
        img: "../assets/images/products/Image 20-3.png",
        title: "Custom Arm Fit",
        desc: "Tailored for maximum comfort and performance.Supports various grip styles."
    },

    {
        id: 5,
        img: "../assets/images/products/Image 20-4.png",
        title: "Running Prosthesis",
        desc: "Optimized for speed and agility.Perfect for athletes and active users."
    },

    {
        id: 6,
        img: "../assets/images/products/Image 20-5.png",
        title: "Robotic Hands",
        desc: "Advanced robotics for precise movements.Seamless integration with neural inputs"
    },
]
let srcHtml = ''

data.forEach(item => {
    srcHtml += `<div class="products__item">
                        <img src="${item.img}" alt="${item.title}" />
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
                                <img src="../assets/icons/cancel.svg" alt="cancel">
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
