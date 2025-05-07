 const form = document.querySelector('#signin__form');
 const userId = document.querySelector('#user_id');
 const welcome = document.querySelector('#welcome');
 const signin = document.querySelector('#signin');
 const btn = document.createElement('button');
 btn.textContent = 'Logaut';

 const oldId = localStorage.getItem('id');

 function checkAuth() {
    const oldId = localStorage.getItem('id');
    
    if (oldId) {
      signin.classList.remove('signin_active');
      welcome.classList.add('welcome_active');
      userId.textContent = oldId;
      welcome.append(btn);
    } else {
      signin.classList.add('signin_active');
      welcome.classList.remove('welcome_active');
    };
  };

  checkAuth();

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
            try {
                let sendDataForm = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
                    method: "POST",  
                    body: formData,
                    }
                );
                if(!sendDataForm.ok) {
                    throw new Error(`Could not fetch`);
                }
                let newRes = await sendDataForm.json();
                localStorage.setItem('id', newRes.user_id);
                checkAuth();
                form.reset();
            }catch (error) {
                console.log(error)
            }
     });
 
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('id');
        checkAuth();
    });


