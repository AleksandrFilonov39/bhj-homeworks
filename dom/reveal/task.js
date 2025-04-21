window.addEventListener('DOMContentLoaded', () => {

    const fraseInText = document.querySelectorAll('.reveal');
    
    document.addEventListener('scroll', () => {
        fraseInText.forEach((el) => {
           const {top, bottom} = el.getBoundingClientRect();
        (bottom > 0 && top <  window.innerHeight) ? el.classList.add('reveal_active') : el.classList.remove('reveal_active');
        });
    })
});