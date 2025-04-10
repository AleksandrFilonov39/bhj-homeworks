 const btnDrop = document.querySelector('.dropdown__value');
 const dropList =  document.querySelector('.dropdown__list');
 const dropLinks = document.querySelectorAll('.dropdown__link');

 btnDrop.addEventListener('click', () => {
    if (!dropList.classList.contains('dropdown__list_active')){
        dropList.classList.add('dropdown__list_active');
       
    } else {
        dropList.classList.remove('dropdown__list_active')
    }
 });

 dropLinks.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        btnDrop.textContent = target.textContent;
        dropList.classList.remove('dropdown__list_active')
    })
    
 });