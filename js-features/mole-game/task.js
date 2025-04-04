const hole = document.querySelectorAll('.hole'),
      countDead = document.querySelector('#dead'),
      countLost = document.querySelector('#lost');

let dead = 0;   
let lost = 0;   

function restart () {
     dead = 0;   
     lost = 0;
     countDead.textContent = dead; 
     countLost.textContent = lost;
};

hole.forEach(el => {
    el.addEventListener('click', (e) => {
        let target = e.target;
        if(target && target.classList.contains('hole_has-mole')) {
            dead += 1;
            countDead.textContent = dead;
            if(dead === 10) {
                alert('Вы могучий убийца кротов!');
                restart ();
            };
        } else {
            lost += 1;
            countLost.textContent = lost;
            if(lost === 5) {
                alert('Попробуй ещё, только насмешил кротов!');
                restart ();
            };
        };
    });
});

