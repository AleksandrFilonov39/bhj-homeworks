window.addEventListener('DOMContentLoaded', () => {

    const iconTextSize = document.querySelectorAll('.font-size');
    const mainText = document.querySelector('.book__content');
    const textColor = document.querySelectorAll('.book__control_color .color');
    const bgColor = document.querySelectorAll('.book__control_background .color');

    

    iconTextSize.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();

            iconTextSize.forEach((el) => {
                el.classList.remove('font-size_active')
            });
            mainText.classList.remove('font-size_small');
            mainText.classList.remove('font-size_big');

            e.target.classList.add('font-size_active')
            
            if(e.target.classList.contains('font-size_small')) {
                mainText.classList.add('font-size_small');
            }else if (e.target.classList.contains('font-size_big')) {
                mainText.classList.add('font-size_big');
            }else return;
        })
        
    })

    textColor.forEach((color) => {
        color.addEventListener('click', (e) => {
            e.preventDefault();
            textColor.forEach((el) => {
                el.classList.remove('color_active')
            });
            e.target.classList.add('color_active');

            mainText.classList.remove('book_color-gray');
            mainText.classList.remove('book_color-whitesmoke');
            mainText.classList.remove('book_color-black');

            if(e.target.classList.contains('text_color_gray')) {
                mainText.classList.add('book_color-gray');

            }else if (e.target.classList.contains('text_color_whitesmoke')) {
                mainText.classList.add('book_color-whitesmoke');
            }else mainText.classList.add('book_color-black');
        })
    })


    bgColor.forEach((color) => {
        color.addEventListener('click', (e) => {
            e.preventDefault();
            bgColor.forEach((el) => {
                el.classList.remove('color_active')
            });
            e.target.classList.add('color_active');
           
            mainText.classList.remove('book_bg-black');
            mainText.classList.remove('book_bg-gray');
            mainText.classList.remove('book_bg-white');

            if(e.target.classList.contains('bg_color_black')) {
                mainText.classList.add('book_bg-black');

            }else if (e.target.classList.contains('bg_color_gray')) {
                mainText.classList.add('book_bg-gray');
            }else mainText.classList.add('book_bg-white');
        })
    })



 
});