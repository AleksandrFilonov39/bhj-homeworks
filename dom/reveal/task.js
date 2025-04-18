window.addEventListener('DOMContentLoaded', () => {

    const fraseInText = document.querySelectorAll('.reveal');

    document.addEventListener('scroll', () => {
        fraseInText.forEach((el) => {
           const {top, bottom} = el.getBoundingClientRect();
            if(top > 0 || bottom > 0) {
                el.classList.add('reveal_active');
            }
        });
    })
});