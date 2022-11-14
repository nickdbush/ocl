import { stacks as stackConfig } from "./config";

export type Location = {
    segment: Segment;
    stack: Stack;
};

export class Shelfmark {
    #main: string;
    #suffix: string;

    constructor(value: string) {
        [this.#main, this.#suffix] = value.trim().toUpperCase().split(" ");
        if (this.#suffix.length != 0 && !this.#suffix.endsWith(".")) {
            this.#suffix += ".";
        }

        this.#suffix = [
            this.#suffix[0].toUpperCase(),
            this.#suffix.slice(1).toLowerCase(),
        ].join("");
    }

    get class(): string {
        const endOfTopic = [...this.#main].findIndex(
            (c) => c >= "0" && c <= "9"
        );
        return this.#main.slice(0, endOfTopic);
    }

    get topic(): number {
        let endOfClass = [...this.#main].findIndex((c) => c == ".");
        if (endOfClass == -1) endOfClass = this.#main.length;
        const raw = this.#main.slice(this.class.length, endOfClass);
        return parseInt(raw);
    }

    get cutterNumbers(): string[] {
        return this.#main.split(".").slice(1);
    }

    get suffix(): string {
        return this.#suffix;
    }

    get isEuropa(): boolean {
        return this.class.startsWith("E");
    }

    get floor(): number {
        return this.compare(new Shelfmark("KDC453 Aaa.")) > 0 ? 1 : 0;
    }

    get floorText(): string {
        if (this.floor == -1) {
            return "Basement";
        } else if (this.floor == 0) {
            return "Ground";
        } else if (this.floor == 1) {
            return "Mezzanine";
        }

        throw new Error(`Unexpected floor number ${this.floor}`);
    }

    get text(): string {
        return [this.#main, this.#suffix].join(" ");
    }

    get location(): Location | null {
        return findStackForShelfmark(this);
    }

    compare(other: Shelfmark): number {
        if (this.text == other.text) return 0;

        let result = compareString(this.class, other.class);
        if (result != 0) return result;

        result = compareNumber(this.topic, other.topic);
        if (result != 0) return result;

        for (let i = 0; i < this.cutterNumbers.length; i++) {
            const otherCutterNumber = other.cutterNumbers[i];
            if (!otherCutterNumber) return 1;

            result = compareString(this.cutterNumbers[i], otherCutterNumber);
            if (result != 0) return result;
        }

        if (other.cutterNumbers.length > this.cutterNumbers.length) {
            return -1;
        }

        return compareString(this.suffix, other.suffix);
    }
}

function compareString(a: string, b: string): number {
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
}

function compareNumber(a: number, b: number): number {
    const diff = a - b;
    if (diff == 0) return 0;
    if (diff < 0) return -1;
    return 1;
}

export type StackId = `${number}${string}`;

export type Segment = {
    bays: [number, number];
    marks: [Shelfmark, Shelfmark];
};

export type Stack = {
    id: StackId;
    segments: Segment[];
};

export const stacks: Stack[] = stackConfig.map((stack) => {
    return {
        ...stack,
        segments: stack.segments.map((segment) => {
            return {
                ...segment,
                marks: segment.marks.map((mark) => new Shelfmark(mark)) as [
                    Shelfmark,
                    Shelfmark
                ],
            };
        }),
    };
});

function findStackForShelfmark(shelfmark: Shelfmark): Location | null {
    for (const stack of stacks) {
        for (const segment of stack.segments) {
            const [start, end] = segment.marks;
            if (
                // Shelfmark GTE start
                shelfmark.compare(start) != -1 &&
                // Shelfmark LT end
                shelfmark.compare(end) == -1
            ) {
                return { stack, segment };
            }
        }
    }
    return null;
}
