import { screen } from "@testing-library/dom";

import { Home } from "./Home";

describe("GIVEN user on Home page", () => {
  beforeEach(() => {
    const container = document.createElement("div");
    container.setAttribute("id", "root");
    document.body.appendChild(container);

    const homePage = new Home(container, "24:00:00");
    homePage.render();
  });

  describe("WHEN user looks at Pomodoro timer", () => {
    test("THEN timer value is formated like HH:MM:DD", () => {
      const timerValueContainer = screen.queryByTestId("timer-value");
      const timerValue = timerValueContainer.textContent;

      //screen.debug();

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
