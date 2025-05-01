 const progress = document.querySelector('#progress');
 const form = document.querySelector('#form');

 form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let request = new XMLHttpRequest();

    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    request.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            progress.value = e.loaded / e.total;
        }
       console.log(e)
    })

    request.upload.addEventListener('error', () => {
        console.error('Ошибка загрузки');
    });

    request.addEventListener('readystatechange', () => {
     
        if (request.readyState == request.DONE && request.status == 200) {
            console.log('Done')
        }
    })
        request.send(formData);
 })

