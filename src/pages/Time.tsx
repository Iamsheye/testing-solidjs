import { createSignal, onCleanup } from "solid-js";
import { format } from "date-fns";

const Time = () => {
  const [time, setTime] = createSignal(format(new Date(), "hh:mm:ss aaaa"));
  const [date, setDate] = createSignal(
    format(new Date(), "EEEE, MMMM do, yyyy")
  );

  const timer = setInterval(() => {
    const time = format(new Date(), "hh:mm:ss aaaa");
    const date = format(new Date(), "EEEE, MMMM do, yyyy");
    setTime(time);
    setDate(date);
  }, 1000);

  onCleanup(() => clearInterval(timer));

  return (
    <div class="grid place-items-center h-screen bg-[#222] text-white">
      <div class="text-center">
        <div class="font-semibold mb-12">{date()}</div>
        <div class="text-5xl font-extrabold">{time()}</div>
      </div>
    </div>
  );
};

export default Time;
