import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/preact";
import { Stop } from "./app";
import { Shelfmark } from "./shelfmark";

describe("Stop", () => {
  it("should display the stack", () => {
    const tests: { shelfmark: Shelfmark; stack: string }[] = [
      { shelfmark: new Shelfmark("D804.G7 Sim."), stack: "1A" },
      { shelfmark: new Shelfmark("HV8197.5.A45 Mux."), stack: "1B" },
      { shelfmark: new Shelfmark("K840 Coz."), stack: "1G" },
      // TODO: Add more test cases
    ];

    for (const { shelfmark, stack } of tests) {
      render(
        <Stop
          destination={{
            shelfmark,
            visited: false,
          }}
          setVisited={() => {}}
        />
      );

      expect(screen.getByText(shelfmark.text)).toBeDefined();
      expect(screen.getByText(stack)).toBeDefined();
    }
  });
});
