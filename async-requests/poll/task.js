async function getData () {
    try {
        let getCurs = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
        console.log(getCurs)
        if(!getCurs.ok) {
            throw new Error(`Could not fetch`);
        }
        let res = await getCurs.json();
        renderQuestion (res);
        const btns = document.querySelectorAll('.poll__answer');
        btns.forEach((btn) => {
            btn.addEventListener('click', async (e)  => {
                e.preventDefault();     
                alert('Ваш голос учтен');
                const answers = document.querySelector('#poll__answers');
                answers.innerHTML = ``;       
                let id = res.id;
                let currentAnswer = res.data.answers.indexOf(e.target.textContent)

                let sendAnswer = await fetch('https://students.netoservices.ru/nestjs-backend/poll', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: new URLSearchParams({
                        vote: `${id}`,
                        answer: `${currentAnswer}`
                        })
                    }
                );

                if(!sendAnswer.ok) {
                    throw new Error(`Could not fetch`);
                }

                let newRes = await sendAnswer.json();

                newRes.stat.forEach((el) => {
                    const answers = document.querySelector('#poll__answers');
                    const text = document.createElement('div')
                    text.textContent = `${el.answer} : ${el.votes}`;
                    answers.append(text);
                })

            })
        })
    } catch(error) {
        console.log("Block catch " + error);
    } 
}

function renderQuestion (res) {
    const title = document.querySelector('#poll__title');
    const answers = document.querySelector('#poll__answers');

    title.textContent = `${res.data.title}`
    let arrAnswers = res.data.answers;
    arrAnswers.forEach((el) => {
        const btn = document.createElement('button');
        btn.className = 'poll__answer';
        btn.textContent = `${el}`
        answers.append(btn)
    })
}

getData ()
