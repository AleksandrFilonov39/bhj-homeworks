const spinner = document.querySelector('#loader');
const items = document.querySelector('#items');

async function getData (url) {
    try {
    getOldValues ();
    let getCurs = await fetch(url);
    console.log(getCurs)
    if(!getCurs.ok) {
        throw new Error(`Could not fetch`);
    }
    let res = await getCurs.json();

    let currentValues = res.response.Valute;
        for (key in currentValues) {
            let charCode = currentValues[key].CharCode;
            let value = currentValues[key].Value;

            createValue (charCode, value);
            spinner.classList.remove('loader_active')
        };

        localStorage.setItem('values', JSON.stringify(currentValues))
    } catch(error) {
        console.log("Block catch " + error);
        spinner.classList.remove('loader_active')
        const item = document.createElement('div');
        item.classList.add('item')
        item.innerHTML = `<div class="item__code">Не удалось загрузить данные</div>`
        items.append(item);
    } 
 };

 function getOldValues () {
   let oldValues = JSON.parse(localStorage.getItem('values'));
   for (key in oldValues) {
        let charCode = oldValues[key].CharCode;
        let value = oldValues[key].Value;

        createValue (charCode, value);
        spinner.classList.remove('loader_active')
    };
 };

 function createValue (charCode, value) {
    const item = document.createElement('div');
    item.classList.add('item')
    item.innerHTML = `
        <div class="item__code">
            ${charCode}
        </div>
        <div class="item__value">
            ${value}
        </div>
        <div class="item__currency">
            руб.
        </div>
        `   
    items.append(item);
 };

 getData ('https://students.netoservices.ru/nestjs-backend/slow-get-courses');