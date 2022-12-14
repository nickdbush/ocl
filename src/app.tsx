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
      destinations.find((destination) => destination.shelfmark.compare(shelfmark) == 0) ?? null
    );
  }

  function addShelfmark(shelfmark: Shelfmark) {
    if (getDestination(shelfmark) != null) return;
    setDestinations((destinations) => [...destinations, { shelfmark, visited: false }]);
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

  const sortedDestinations = Object.entries(
    groupBy(
      [...destinations].sort((a, b) => a.shelfmark.compare(b.shelfmark)),
      (dest) => {
        const location = dest.shelfmark.location;
        if (!location) return "Unknown";
        if (location.loc == "europa") return "Europa";
        if (location.loc == "law") return location.floor;
      }
    )
  ).map(([label, destinations]) => ({ label, destinations }));

  return { destinations: sortedDestinations, addShelfmark, setVisited };
}

export function App() {
  const [input, setInput] = useState("");
  const { destinations, addShelfmark, setVisited } = useDestinations();

  return (
    <div class="bg-white h-full flex flex-col font-mono">
      <div class="flex-1 overflow-y-auto">
        {destinations.length > 0 ? (
          <StopList groups={destinations} setVisited={setVisited} />
        ) : (
          <Explainer />
        )}
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
          class="w-full px-4 py-4 border-t bg-white outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700 placeholder:transition-colors focus:placeholder:text-blue-600 focus:text-blue-700"
          type="text"
          placeholder="Shelfmark"
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          autofocus={true}
          spellcheck={false}
        />
      </form>
    </div>
  );
}

type StopProps = {
  destination: Destination;
  setVisited: (visited: boolean) => void;
};

export function Stop({ destination, setVisited }: StopProps) {
  const { shelfmark, visited } = destination;
  const location = shelfmark.location;

  return (
    <tr
      class="cursor-pointer"
      onClick={() => {
        setVisited(!visited);
      }}
    >
      <td class={clsx("pl-4 py-3 transition-colors", visited && "text-gray-400")}>
        {shelfmark.text}
      </td>
      <td class={clsx("pr-4 py-3 text-right transition-colors", visited && "text-gray-400")}>
        {location?.loc == "law" && (
          <>
            <span
              class={clsx("mr-3 transition-colors", visited ? "text-gray-300" : "text-gray-700")}
            >
              {location.bays[0]}&ndash;{location.bays[1]}
            </span>
            <span class="font-bold">{location.stack}</span>
          </>
        )}
        {location?.loc == "europa" && (
          <>
            <span>Helpdesk</span>
          </>
        )}
      </td>
    </tr>
  );
}

type ListProps = {
  groups: { label: string; destinations: Destination[] }[];
  setVisited: (shelfmark: Shelfmark, visited: boolean) => void;
};

function StopList({ groups, setVisited }: ListProps) {
  return (
    <table class="w-full">
      <tbody class="divide-y">
        {groups
          .filter(({ destinations }) => destinations.length > 0)
          .map(({ label, destinations }) => {
            return (
              <Fragment key={label}>
                <tr class="text-lg leading-none">
                  <td class="px-4 pb-3 pt-6 bg-white-50 flex flex-row items-center text-blue-600 text-xl">
                    <ArrowUpRight class="mr-2" />
                    <span>{label}</span>
                  </td>
                </tr>
                {destinations.map((destination) => (
                  <Stop
                    key={destination.shelfmark.text}
                    destination={destination}
                    setVisited={(visited) => setVisited(destination.shelfmark, visited)}
                  />
                ))}
              </Fragment>
            );
          })}
      </tbody>
    </table>
  );
}

function Explainer() {
  return (
    <div class="p-6 flex flex-col h-full justify-end">
      <h1 class="text-5xl font-bold tracking-tight">OCL/MAP</h1>
      <p class="mt-6">
        This app helps you find things in the Old College Law Library. To get started, enter a
        shelfmark below. You can add multiple shelfmarks to build up a list of locations, ordered
        automatically.
      </p>
      <p class="mt-6 mb-2 text-6xl font-bold">&darr;</p>
    </div>
  );
}
