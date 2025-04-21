window.addEventListener('DOMContentLoaded', () => {

//----- Use Class----------
    // class Rotate {
    //     constructor (selector, selectorActiveClass) {
    //         this.selectors = document.querySelectorAll(selector),
    //         this.selectorActiveClass = selectorActiveClass,
    //         this.i = 0

    //         this.rotate = this.rotate.bind(this);
    //     }

    //     rotate () {
            
    //         if(this.i === this.selectors.length){
    //             this.selectors[this.i - 1].classList.remove( this.selectorActiveClass)
    //             this.i = 0;
    //         };
    //         this.selectors[this.i].style.color = this.selectors[this.i].dataset.color;
    //         if (this.i === 0 ) {
    //             this.selectors[this.i].classList.add( this.selectorActiveClass)
    //             this.i++
    //         } else if (this.i > 0 && this.i < this.selectors.length) {
    //             this.selectors[this.i - 1].classList.remove( this.selectorActiveClass)
    //             this.selectors[this.i].classList.add( this.selectorActiveClass)
    //             this.i++;
    //         } 
    //     }

    //     setIntervalTime () {
    //         if(this.selectors[this.i]) {           
    //         return Number(this.selectors[this.i].dataset.speed);
    //         }
    //     }

    //     start() {
    //         const rotateNext = () => {
    //             this.rotate();
    //             const delay = this.setIntervalTime();
    //             setTimeout(rotateNext, delay);
    //         };
    //         rotateNext();
    //     }
    // }

    // const rotate = new Rotate ('.rotator__case', 'rotator__case_active');

    // rotate.start();



//------------------Use function ----------------------//

    function start (selector, activeClass) {
        const words = document.querySelectorAll(selector);

            let i = 0;

        function rotate () {
            if(i === words.length){
                words[i - 1].classList.remove(activeClass)
                i = 0;
            };

            words[i].style.color = words[i].dataset.color;

            if (i === 0 ) {
                words[i].classList.add(activeClass)
                i++
            } else if (i > 0 && i < words.length) {
                words[i - 1].classList.remove(activeClass)
                words[i].classList.add(activeClass)
                i++;
            }   

            let delay = setDelay ();
           return setTimeout(rotate, delay);
        }

        function setDelay () {
            if(words[i]) {           
                return Number(words[i].dataset.speed);
            };
        }

       return rotate ();
    }

    start ('.rotator__case', 'rotator__case_active');

});

