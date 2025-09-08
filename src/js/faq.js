Array.from(document.getElementsByClassName('faq__item')).forEach(item => {
    item.addEventListener('click', () => {
        console.log(item);
        item.classList.toggle('faq__active');
    });
})