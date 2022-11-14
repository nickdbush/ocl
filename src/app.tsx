import { useState } from "preact/hooks";
import { Shelfmark } from "./shelfmark";
import { groupBy } from "lodash-es";
import { Fragment } from "preact/jsx-runtime";
import { ArrowUpRight } from "lucide-preact";
import clsx from "clsx";

type Destination = {
    shelfmark: Shelfmark;
    visited: boolean;
};

function useDestinations() {
    const [destinations, setDestinations] = useState<Destination[]>([]);

    function getDestination(shelfmark: Shelfmark): Destination | null {
        return (
            destinations.find(
                (destination) => destination.shelfmark.compare(shelfmark) == 0
            ) ?? null
        );
    }

    function addShelfmark(shelfmark: Shelfmark) {
        if (getDestination(shelfmark) != null) return;
        setDestinations((destinations) => [
            ...destinations,
            { shelfmark, visited: false },
        ]);
    }

    function setVisited(shelfmark: Shelfmark, visited: boolean) {
        setDestinations((destinations) =>
            destinations.map((destination) => {
                if (destination.shelfmark.compare(shelfmark) == 0) {
                    return { ...destination, visited };
                } else {
                    return destination;
                }
            })
        );
    }

    const sortedDestinations = groupBy(
        [...destinations].sort((a, b) => a.shelfmark.compare(b.shelfmark)),
        (dest) => dest.shelfmark.floorText
    );

    return { destinations: sortedDestinations, addShelfmark, setVisited };
}

type StopProps = {
    destination: Destination;
    setVisited: (shelfmark: Shelfmark, visited: boolean) => void;
};

export function Stop({ destination, setVisited }: StopProps) {
    const { shelfmark, visited } = destination;
    return (
        <tr
            class="cursor-pointer"
            onClick={() => {
                setVisited(shelfmark, !visited);
            }}
        >
            <td
                class={clsx(
                    "px-4 py-3",
                    visited && "line-through text-gray-400"
                )}
            >
                {shelfmark.text}
            </td>
            <td
                class={clsx("px-4 py-3 text-right", visited && "text-gray-400")}
            >
                {shelfmark.stack ?? "??"}
            </td>
        </tr>
    );
}

export function App() {
    const [input, setInput] = useState("");
    const { destinations, addShelfmark, setVisited } = useDestinations();

    return (
        <div class="bg-white h-full flex flex-col font-mono">
            <div class="flex-1 overflow-y-auto">
                <table class="w-full">
                    <tbody class="divide-y">
                        {Object.entries(destinations)
                            .filter(
                                ([_, destinations]) => destinations.length > 0
                            )
                            .map(([floorText, destinations]) => {
                                return (
                                    <Fragment key={floorText}>
                                        <tr class="text-lg leading-none">
                                            <td class="px-4 pb-3 pt-6 bg-white-50 flex flex-row items-center text-blue-600">
                                                <ArrowUpRight class="mr-1.5" />
                                                <span>{floorText}</span>
                                            </td>
                                        </tr>
                                        {destinations.map((destination) => (
                                            <Stop
                                                key={destination.shelfmark.text}
                                                destination={destination}
                                                setVisited={setVisited}
                                            />
                                        ))}
                                    </Fragment>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <form
                class="bg-white w-full"
                onSubmit={(e) => {
                    e.preventDefault();
                    const shelfmark = new Shelfmark(input);
                    addShelfmark(shelfmark);
                    setInput("");
                }}
            >
                <input
                    class="w-full px-4 py-4 border-t bg-white outline-none focus:border-blue-500 focus:bg-blue-50 transition-colors"
                    type="text"
                    placeholder="Shelfmark"
                    value={input}
                    onInput={(e) => setInput(e.currentTarget.value)}
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck={false}
                />
            </form>
        </div>
    );
}
