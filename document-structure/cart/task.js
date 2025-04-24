const btnDec = document.querySelectorAll('.product__quantity-control_dec');
const btnInc = document.querySelectorAll('.product__quantity-control_inc');
const btnAdd = document.querySelectorAll('.product__add');
const card = document.querySelectorAll('.product');
const basket = document.querySelector('.cart__products');

let obj = JSON.parse(localStorage.getItem('obj')) || {
    id1: { id: 1, count: 0, imgSrc: '', bol: false },
    id2: { id: 2, count: 0, imgSrc: '', bol: false },
    id3: { id: 3, count: 0, imgSrc: '', bol: false },
    id4: { id: 4, count: 0, imgSrc: '', bol: false }
};

function renderBasket () {
    basket.innerHTML = '';
    for (let key in obj) {
        if(obj[key].bol) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="cart__product" data-id=${obj[key].id}>
                <img class="cart__product-image" src='${obj[key].imgSrc}'>
                <div class="cart__product-count">${obj[key].count}</div>
            </div>
            `
            basket.append(div);
        }
   }   
   document.querySelector('.cart').style.display =  basket.children.length ? "block" : "none"
   removeCard ()
}

renderBasket ();
btnDec.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let count = Number(e.target.nextElementSibling.textContent.trim())
        if(count > 1) {
        count --
        e.target.nextElementSibling.textContent = count;
        } else {
            return;
        };
    })
});

btnInc.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let count = Number(e.target.previousElementSibling.textContent.trim());
        count ++
        e.target.previousElementSibling.textContent = count;
    })
})

card.forEach((card) => {
    card.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target.classList.contains('product__add')){

            let count = Number(e.currentTarget.querySelector('.product__quantity-value').textContent);
            let srcImg = e.currentTarget.querySelector('img').getAttribute("src");
            let id = Number(e.currentTarget.dataset.id);
            let key = `id${id}`
            count = obj[key].bol ? obj[key].count + count : count;
            obj[key].bol = true;
            obj[key].count = count;
            obj[key].imgSrc = srcImg;
            console.log(srcImg)
            localStorage.setItem('obj', JSON.stringify(obj));
            renderBasket ();
        }
    })
})

function removeCard () {
    const cards = document.querySelectorAll('.cart__product');
    cards.forEach((el) => {
        el.addEventListener('click', (e) => {
            console.log('heloo')
            let id = Number(e.currentTarget.dataset.id);
            let key = `id${id}`
            obj[key].bol = false;
            obj[key].count = 0;
            localStorage.setItem('obj', JSON.stringify(obj));
            renderBasket ();
        })
    })
}
    