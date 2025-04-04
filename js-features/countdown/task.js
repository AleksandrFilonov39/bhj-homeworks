const time = document.querySelector('#timer');
// let timerStart = Number(time.textContent);
let timerStart = Number(4000);

function addZero (num) {
    if(num < 10) {
        num = `0${num}`;
    }
    return num;
}

function timer () {
    let hours = ((timerStart / 1000 / 60 / 60) % 24).toFixed(0),
        minutes = ((timerStart / 1000 / 60) % 60).toFixed(0),
        seconds = ((timerStart / 1000) % 60).toFixed(0);

    timerStart -= 1000;
    if(seconds == 0 && minutes == 0 && hours == 0) {
        alert('Вы победили в конкурсе! Вы получаете бесплатное обучение');
        clearInterval(timerID);

        setTimeout(() => {
            location.assign("https://netology.ru/");
        }, 3000);    
    };
    
    time.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

};

const timerID = setInterval(timer, 1000);
