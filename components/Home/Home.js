export class Home {
  constructor(container, timerValue) {
    this.container = container;
    this.timerValue = timerValue;
  }

  get html() {
    return `<div class="timer">
      <span data-testid="timer-value">${this.timerValue}</span>
    </div>`;
  }

  render() {
    this.container.innerHTML = this.html;
  }
}
