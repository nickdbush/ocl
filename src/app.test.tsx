import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/preact";
import { Stop } from "./app";
import { Shelfmark } from "./shelfmark";

describe("Stop", () => {
  it("should display the stack", () => {
    const tests: { shelfmark: Shelfmark; stack: string; bays: [number, number] }[] = [
      { shelfmark: new Shelfmark("D804.G7 Sim."), stack: "1A", bays: [39, 40] },
      { shelfmark: new Shelfmark("HV8197.5.A45 Mux."), stack: "1B", bays: [59, 60] },
      { shelfmark: new Shelfmark("K840 Coz."), stack: "1G", bays: [91, 95] },
      // TODO: Add more test cases
    ];

    for (const { shelfmark, stack, bays } of tests) {
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
      expect(screen.getByText(`${bays[0]}–${bays[1]}`));
    }
  });
});
