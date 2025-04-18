window.addEventListener('DOMContentLoaded', () => {
    class Rotate {
        constructor (selector, selectorActiveClass) {
            this.selectors = document.querySelectorAll(selector),
            this.selectorActiveClass = selectorActiveClass,
            this.i = 0
        }

        rotate () {
            
            if(this.i === this.selectors.length){
                this.selectors[this.i - 1].classList.remove( this.selectorActiveClass)
                this.i = 0;
            };
            this.selectors[this.i].style.color = this.selectors[this.i].dataset.color;
            if (this.i === 0 ) {
                this.selectors[this.i].classList.add( this.selectorActiveClass)
                this.i++
            } else if (this.i > 0 && this.i < this.selectors.length) {
                this.selectors[this.i - 1].classList.remove( this.selectorActiveClass)
                this.selectors[this.i].classList.add( this.selectorActiveClass)
                this.i++;
            } 
        }

        setIntervalTime () {
            if(this.selectors[this.i]) {           
            return Number(this.selectors[this.i].dataset.speed);
            }
        }

        start () {
            let timeInterval = this.setIntervalTime ();
                setInterval(() => {
                    timeInterval = this.setIntervalTime ();
                this.rotate ();
            }, timeInterval);
        }
    }

    const rotate = new Rotate ('.rotator__case', 'rotator__case_active');

    rotate.start();



//------------------First Work ----------------------//
// const words = document.querySelectorAll('.rotator__case');

// function start () {
//         let i = 0;

//     function rotate () {
//         words[i].style.color = words[i].dataset.color;
//         if (i === 0 ) {
//             words[i].classList.add('rotator__case_active')
//             i++
//         } else if (i > 0 && i < words.length) {
//             words[i - 1].classList.remove('rotator__case_active')
//             words[i].classList.add('rotator__case_active')
//             i++;
//         } else {
//             words[i - 1].classList.remove('rotator__case_active')
//         i = 0;
//             words[i].classList.add('rotator__case_active')
//         }
//             console.log(words[i])
//             console.log(i)
//     }
    
//     return rotate;
// }

// const newStart = start ();

//     setInterval(() => {
//         newStart();
//     }, 1000);

});

