 const tabs = document.querySelectorAll('.tab');
 const tabContent = document.querySelectorAll('.tab__content');
 const arrTabs = Array.from(tabs);


 tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const target = e.target;
        if (target && !target.classList.contains('tab_active')) {
            removeActive ();
            target.classList.add('tab_active');
            let ind = arrTabs.indexOf(target);
            tabContent[ind].classList.add('tab__content_active')
        };
    });
 });

 function removeActive () {
    tabs.forEach(el => {
        el.classList.remove('tab_active')
    });

    tabContent.forEach(el => {
        el.classList.remove('tab__content_active')
    })
 };