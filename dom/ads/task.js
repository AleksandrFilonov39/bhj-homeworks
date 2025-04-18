window.addEventListener('DOMContentLoaded', () => {
    class Rotate {
        constructor (selector, selectorActiveClass) {
            this.selector = document.querySelectorAll(selector),
            this.selectorActiveClass = selectorActiveClass,
            this.i = 0
        }

        rotate () {
         
            if (this.i === 0 ) {
                this.selector[this.i].classList.add( this.selectorActiveClass)
                this.selector[this.i].style.color = this.selector[this.i].dataset.color;
                this.i++
            } else if (this.i > 0 && this.i < this.selector.length) {
                this.selector[this.i - 1].classList.remove( this.selectorActiveClass)
                this.selector[this.i].classList.add( this.selectorActiveClass)
                this.selector[this.i].style.color = this.selector[this.i].dataset.color;
                this.i++;
            } else {
                this.selector[this.i - 1].classList.remove( this.selectorActiveClass)
                this.i = 0;
                this.selector[this.i].classList.add( this.selectorActiveClass)
                this.selector[this.i].style.color = this.selector[this.i].dataset.color;
            }
                console.log(this.selector[this.i])
                console.log(this.i)
        }

        
        setIntervalTime () {
            if (this.i === 0 ) {
               return Number(this.selector[this.i].dataset.speed);
                
            } else if (this.i > 0 && this.i < this.selector.length) {
                return Number(this.selector[this.i].dataset.speed);
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
    rotate.setIntervalTime();



//------------------First Work ----------------------//
// const words = document.querySelectorAll('.rotator__case');

// function start () {
//         let i = 0;

//     function rotate () {
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

