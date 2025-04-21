window.addEventListener('DOMContentLoaded', () => {
    const iconTextSize = document.querySelectorAll('.font-size');
    const mainText = document.querySelector('.book__content');
    const textColor = document.querySelectorAll('.book__control_color .color');
    const bgColor = document.querySelectorAll('.book__control_background .color');

    iconTextSize.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            iconTextSize.forEach((el) => {
                el.classList.remove('font-size_active');
                mainText.classList.remove(`font-size_${el.dataset.size}`)
            });
            e.target.classList.add('font-size_active');
            if(e.target) {
                mainText.classList.add(`font-size_${e.target.dataset.size}`);
            };
        }); 
    });

    textColor.forEach((colors) => {
        colors.addEventListener('click', (e) => {
            e.preventDefault();
            textColor.forEach((el) => {
                el.classList.remove('color_active')
                mainText.classList.remove(`book_color-${el.dataset.textColor}`)
            });
            e.target.classList.add('color_active');
            if(e.target) {
                mainText.classList.add(`book_color-${e.target.dataset.textColor}`);
            };
        });
    });

    bgColor.forEach((color) => {
        color.addEventListener('click', (e) => {
            e.preventDefault();
            bgColor.forEach((el) => {
                el.classList.remove('color_active')
                mainText.classList.remove(`book_bg-${el.dataset.bgColor}`)
            });
            e.target.classList.add('color_active');
            if(e.target) {
                mainText.classList.add(`book_bg-${e.target.dataset.bgColor}`);
            };
        });
    });

});