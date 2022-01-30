import { Timer } from "../Timer/Timer.js";

export class Home {
  constructor(containerSelector, timerValue) {
    this.container = document.querySelector(containerSelector);
    this.timerValue = timerValue;
  }

  get html() {
    return `<div id="home">
      ${new Timer("#home", "24:00:00").html}
    </div>`;
  }

  render() {
    this.container.innerHTML = this.html;
  }
}
