class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.div = container.querySelector('.status');
    this.body = document.querySelector('body');
    this.timerID;

    this.reset();

    this.registerEvents();

    this.create();
  }



  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() { 
    document.addEventListener('keydown', (e) => {

      if(e.altKey || e.shiftKey || e.ctrlKey) {
        console.log(e.altKey);
        return;
      } else

{      if(e.key.toLocaleLowerCase() === this.currentSymbol.textContent){
        this.success();
      } else {
        this.fail();
      };
  
      console.log(this.currentSymbol.textContent)
    }});
  
  };

  create() {
    let p = document.createElement('p');
    p.innerHTML = `Осталось времени: <span class="status__timer"></span> секунд`
    this.div.append(p)
  }

  // timer() {
  //   clearInterval(this.timerID);
  //   let time = Number(this.wordElement.textContent.length) + 1;
  //   this.timerID = setInterval(() => {
  //     if (time === 1) {
  //       clearInterval(this.timerID);
  //       this.fail();
  //     };
  //     time--;
  //     document.querySelector('.status__timer').textContent = time;
  //   }, 1000);


  // };

  

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    
    this.renderWord(word);
    // this.timer();
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}


const div = document.querySelector('.status');
const body = document.querySelector('body');

function start() {
  let div = document.createElement('main');
  div.classList.add('content');
  div.innerHTML = `
     <div class="card">
          <div id="game">
              <div class="status">
                  <p>
                      Правильно введённых слов: <span class="status__wins">0</span>
                  </p>
                  <p>
                      Неправильно введённых слов: <span class="status__loss">0</span>
                  </p>
              </div>
              <div class="word">                  
              </div>
          </div> 
      </div>
  `;
  body.append(div)
};

start();

new Game(document.getElementById('game'))

