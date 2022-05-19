import { createSignal, For } from "solid-js";

const Home = () => {
  let inputRef: HTMLInputElement;
  const [val, setVal] = createSignal("Tom");
  const [names, setNames] = createSignal<string[]>(["Joe"]);

  return (
    <div class="grid place-items-center h-screen bg-[#222] text-white">
      <div class="px-2.5 max-w-[375px]">
        <form
          onsubmit={(e) => {
            e.preventDefault();
            if (val()) {
              setNames((names) => [...names, val()]);
              setVal("");
              inputRef?.focus();
            }
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={val()}
            oninput={(e) => setVal(e.currentTarget.value)}
            class="text-[#222] py-1 px-2 rounded-md border-2 border-purple-500 focus-visible:outline-slate-500"
          />
          <button
            type="submit"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2 ml-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add
          </button>
        </form>
        <ul class="mt-4 flex items-center flex-wrap gap-x-2 gap-y-3">
          <For each={names()}>
            {(name) => (
              <li class="px-3.5 bg-gray-700 border border-slate-300 rounded-2xl inline">
                <div class="flex items-center">
                  <span>{name}</span>
                  <span
                    class="ml-3 text-sm cursor-pointer text-red-500"
                    onClick={() =>
                      setNames((names) => names.filter((n) => n !== name))
                    }
                  >
                    x
                  </span>
                </div>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
};

export default Home;
