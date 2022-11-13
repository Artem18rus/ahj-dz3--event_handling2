/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
// TODO: write code here
const container = document.querySelectorAll('.container div');
class Games {
  constructor() {
    this.container = container;
  }

  game() {
    setInterval(() => {
      const position = Math.floor(Math.random() * container.length);
      for (let i = 0; i < this.container.length; i += 1) {
        this.container[i].classList.remove('gb');
      }
      this.container[position].classList.add('gb');
    }, 1000);
    Games.cursor();
    this.eventGame();
  }

  eventGame() {
    let failedAttempt = 0;
    this.container.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.classList.contains('gb')) {
          item.classList.remove('gb');
        } else {
          failedAttempt += 1;
          if (failedAttempt === 5) {
            alert('ПОРАЖЕНИЕ! Игра закончена.');
            location.reload();
          }
        }
      });
    });
  }

  static cursor() {
    const cursor = document.querySelector('.cursor');
    const mouseMove = function (e) {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = `${x - 170}px`;
      cursor.style.top = `${y - 150}px`;
    };
    document.addEventListener('mousemove', mouseMove);
  }
}

const eks1 = new Games(container);
eks1.game();
