 const text = document.querySelector('#editor');
 const card = document.querySelector('.card');
 const btn = document.createElement('button');
 btn.textContent = 'Clear textarea'
 card.append(btn);

 btn.addEventListener('click', (e) => {
    e.preventDefault();
    text.value = '';
    localStorage.removeItem('text');
 });

 const oldText = localStorage.getItem('text');

 if(oldText) {
    text.value = oldText;
 }

 text.addEventListener('input', (e) => {
    e.preventDefault();
    const text = e.target.value;   
    localStorage.setItem('text', text); 
 })