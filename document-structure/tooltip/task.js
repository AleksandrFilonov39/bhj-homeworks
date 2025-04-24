const link = document.querySelectorAll('.has-tooltip');

link.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        let newDiv = document.querySelector('.tooltip_active');
        if(newDiv) { 
            if(newDiv.previousElementSibling === e.target) {
                newDiv.remove();
                return;
            }
            newDiv.remove();
        };
        const textTitle = e.target.title;
        let rect = e.target.getBoundingClientRect();
        let bottom = rect.bottom
        let left = rect.left

        if(e.target.dataset.position === 'right'){
            bottom = (rect.top - 5);
            left = rect.right;
        }
   
        e.target.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${bottom}px">${textTitle}</div>`);     
    })
})

document.addEventListener('scroll', () => {
    let newDiv = document.querySelector('.tooltip_active');
    if(newDiv) { 
        newDiv.remove();
    }
})

document.addEventListener('click', (e) => {
    let newDiv = document.querySelector('.tooltip_active');
    if(!e.target.classList.contains('has-tooltip') && !e.target.classList.contains('tooltip') && newDiv) { 
        newDiv.remove();
    }
});



