import { screen } from "@testing-library/dom";

import { Timer } from "./Timer";

describe("GIVEN a mounted Timer component", () => {
  beforeEach(() => {
    const container = document.createElement("div");
    container.setAttribute("id", "timer-container");
    document.body.appendChild(container);

    const timerComponent = new Timer("#timer-container", "24:00:00");
    timerComponent.render();

    // screen.debug();
  });

  describe("WHEN user looks at the Timer", () => {
    test("THEN Timer value is formated like HH:MM:DD", () => {
      const timerValueContainer = screen.queryByTestId("timer-value");
      const timerValue = timerValueContainer.textContent;

      expect(timerValueContainer).toBeTruthy();
      expect(timerValue).toMatch(/^\d{2}:\d{2}:\d{2}$/);

      const [hours, minutes, seconds] = [
        ...timerValue.split(":").map((str) => Number(str)),
      ];

      expect(hours).toBeLessThan(25);
      expect(minutes).toBeLessThan(60);
      expect(seconds).toBeLessThan(60);

      if (hours === 24) {
        expect(minutes).toBe(0);
        expect(seconds).toBe(0);
      }
    });
  });
});
