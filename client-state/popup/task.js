 const modal = document.querySelector('#subscribe-modal');
 const closeModal = document.querySelector('.modal__close');

 const openModal = localStorage.getItem('open');

 if (openModal && openModal === 'close') {
    
 } else {
    setTimeout(() => {
        modal.classList.add('modal_active');
        localStorage.setItem('open', 'open');
     }, 2000);
    
    closeModal.addEventListener('click', () => {
        localStorage.removeItem('open')
        localStorage.setItem('open', 'close');
        modal.classList.remove('modal_active');
    })
 }
