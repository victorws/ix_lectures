
class RandomNumberGenerator {
  generateRandomNumber(from, to) {
    return Math.round((Math.random() * to) + from);
  }
}

class UI {

  constructor() {
    this.button = document.getElementById('button');
    this.guessInput = document.getElementById('guess-input');
    this.random = new RandomNumberGenerator();

    this.successAlert = document.getElementById('success-alert');
    this.failAlert = document.getElementById('fail-alert');

    this.initEventListeners()
  }

  initEventListeners() {
    this.button.addEventListener('click', () => this.onButtonClick());
  }

  onButtonClick() {

    const random = this.random.generateRandomNumber(0, 10);
    const guess = this.guessInput.value;
    if (this.guessInput.value == random) {
      this.showSuccessAlert(guess, random);
    } else {
      this.showFailAlert(guess, random);
    }
  }

  showSuccessAlert(guess, random) {
    this.successAlert.classList.remove('hide');
    this.failAlert.classList.add('hide');

    this.successAlert.innerHTML = 'You guessed: ' + guess + ', the answer is : ' + random;
  }

  showFailAlert(guess, random) {
    this.successAlert.classList.add('hide');
    this.failAlert.classList.remove('hide');

    this.failAlert.innerHTML = 'You guessed: ' + guess + ', the answer is : ' + random;
  }
}

const ui = new UI();