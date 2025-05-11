 const modal = document.querySelector('#subscribe-modal');
 const closeModal = document.querySelector('.modal__close');

 function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
};

!getCookie('modal') ? modal.classList.add('modal_active') : modal.classList.remove('modal_active');

closeModal.addEventListener('click', () => {
    let value = encodeURIComponent('show')
    let updatedCookie = `modal=${value}`
    document.cookie = updatedCookie
    modal.classList.remove('modal_active');
}); 
