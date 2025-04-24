 const form = document.querySelector('#tasks__form');
 const input = document.querySelector('#task__input');
 const outList = document.querySelector('#tasks__list');



 let localStoreArr = localStorage.getItem('arr') ? localStorage.getItem('arr').split(',') : [];

 function creatreElement(textContentElement, inputPlace) {
    const div = document.createElement('div');
    div.classList.add('task')
    div.innerHTML = `
        <div class="task__title">${textContentElement}</div>
        <a href="#" class="task__remove">&times;</a>
    `
    inputPlace.append(div);
}

 function addOld () {
    localStoreArr.forEach((el) => {
        creatreElement(el, outList);
    })
 }

 form.addEventListener('submit', (e) => {
    e.preventDefault();
    let task = input.value;
    if(!task) {
        return;
    }
    creatreElement(task, outList);

    localStorage.removeItem('arr', localStoreArr)
    localStoreArr.push(task)
    localStorage.setItem('arr', localStoreArr)
 
    form.reset();
 });

 outList.addEventListener('click', (e) => {
        const target = e.target;
    if(target && target.classList.contains('task__remove')){
        console.log(target.previousElementSibling.textContent);
        localStorage.removeItem('arr', localStoreArr)
        let ind = localStoreArr.indexOf(target.previousElementSibling.textContent);
        console.log(ind);
        localStoreArr = [...localStoreArr.slice(0, ind), ...localStoreArr.slice(ind + 1)]
        localStorage.setItem('arr', localStoreArr)
        target.parentElement.remove();
    } else {return}
 });


 addOld ();

