import { screen } from "@testing-library/dom";

import { Home } from "./Home";

describe("GIVEN user on Home page", () => {
  beforeEach(() => {
    const container = document.createElement("div");
    container.setAttribute("id", "root");
    document.body.appendChild(container);

    const homePage = new Home("#root", "24:00:00");
    homePage.render();

    // screen.debug();
  });

  describe("WHEN user looks at this Home page", () => {
    test("THEN user can see a Timer component", () => {
      expect(screen.queryByTestId("timer-value")).toBeTruthy();
    });
  });
});
