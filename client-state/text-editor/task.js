 const text = document.querySelector('#editor');
 const card = document.querySelector('.card');
 const btn = document.createElement('button');
 btn.textContent = 'Clear textarea'
 card.append(btn);

 const oldText = localStorage.getItem('text');
 text.value = oldText;
 console.log(oldText)

 btn.addEventListener('click', (e) => {
    e.preventDefault();
    text.value = '';
    localStorage.removeItem('text');
 });

 text.addEventListener('input', (e) => {
    e.preventDefault();
    const text = e.target.value;   
    localStorage.setItem('text', text); 
 })