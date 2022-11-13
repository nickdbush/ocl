import { useState } from "preact/hooks";
import { Shelfmark } from "./shelfmark";
import { groupBy } from "lodash";
import { Fragment } from "preact/jsx-runtime";
import { ArrowUpRight } from "lucide-preact";

export function App() {
    const [input, setInput] = useState("");
    const [destinations, setDestinations] = useState<Shelfmark[]>([]);

    const orderedDestinations = groupBy(
        [...destinations].sort((a, b) => a.compare(b)),
        (dest) => dest.floorText
    );

    return (
        <div class="bg-white h-full flex flex-col font-mono">
            <div class="flex-1 overflow-y-auto">
                <table class="w-full">
                    <tbody class="divide-y">
                        {Object.entries(orderedDestinations)
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
                                        {destinations.map((dest) => {
                                            return (
                                                <tr key={dest.text}>
                                                    <td class="px-4 py-3">
                                                        {dest.text}
                                                    </td>
                                                    <td class="px-4 py-3 text-right">
                                                        {dest.stack ?? "??"}
                                                    </td>
                                                </tr>
                                            );
                                        })}
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
                    setDestinations((dests) => [...dests, shelfmark]);
                    setInput("");
                }}
            >
                <input
                    class="w-full px-4 py-4 border-t bg-white outline-none focus:border-blue-500 focus:bg-blue-50 transition-colors"
                    type="text"
                    placeholder="Shelfmark"
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)}
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck={false}
                />
            </form>
        </div>
    );
}
