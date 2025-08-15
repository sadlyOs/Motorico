Array.from(document.getElementsByClassName('faq__item')).forEach(item => {
    item.addEventListener('click', () => {
        console.log(item);
        item.classList.toggle('faq__active');
        // if (item.classList.contains('active')) {
        //     console.log('Item is active');

        //     const newP = document.createElement('p');
        //     newP.textContent = 'This is a new paragraph added to the FAQ item.';
        //     item.appendChild(newP);
        // }
        // else {
        //     console.log('Item is not active');
        //     const newP = item.querySelector('p');
        //     if (newP) {
        //         item.removeChild(newP);
        //     }
        // }
        // const answer = item.querySelector('.faq__answer');
        // answer.classList.toggle('active');
        // const icon = item.querySelector('.faq__icon');
        // icon.classList.toggle('active');
    });
})