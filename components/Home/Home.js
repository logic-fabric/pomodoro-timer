export class Home {
  constructor(container, timerValue) {
    this.container = container;
    this.timerValue = timerValue;
  }

  get html() {
    return `<span data-testid="timer-value">${this.timerValue}</span>`;
  }

  render() {
    this.container.innerHTML = this.html;
  }
}
