export class Timer {
  constructor(containerSelector, timerValue) {
    this.container = document.querySelector(containerSelector);
    this.timerValue = timerValue;
  }

  get html() {
    return `<div class="timer" id="timer">
      <span data-testid="timer-value">${this.timerValue}</span>
    </div>`;
  }

  render() {
    this.container.innerHTML = this.html;
  }
}
