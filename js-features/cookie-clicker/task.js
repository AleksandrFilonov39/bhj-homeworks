const countClick = document.querySelector('#clicker__counter'),
      cookie = document.querySelector('#cookie');

let increasClick = Number(countClick.textContent);
let seconds = new Date();

const div = document.createElement('div');
div.classList.add('clicker__status');
div.innerHTML =  'Скорость клика: <span id="clicker__speed">0</span>';
document.querySelector('.clicker__status').append(div);
const countSpeed = document.querySelector('#clicker__speed');

cookie.addEventListener('click', () => {
    increasClick += 1;
    countClick.textContent = increasClick;
    if(increasClick % 2 === 0) {
        cookie.width = 200;
        cookie.height = 128;
    } else {
        cookie.width = 250;
        cookie.height = 178;
    }
     
    let newSeconds = new Date();
    let time = (newSeconds - seconds) / 1000;  
    let resultSpeed = (increasClick / time); 
    countSpeed.textContent = Math.floor(resultSpeed);
}); 






