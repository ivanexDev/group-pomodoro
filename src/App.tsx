import { useEffect, useState } from "react";
import { setSupabaseTimer, supabase } from "./supabase/config";
import Timer from "./components/Timer";

type Timer = {
  time: string;
  state: boolean;
};

function App() {
  const [timer, setTimer] = useState<Timer | null>({
    state: false,
    time: "00:00",
  });

  useEffect(() => {}, [timer]);

  supabase
    .channel("custom-insert-channel")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "pomodoro-timer" },
      (payload) => {
        console.log("Change received!", payload.new);
        const newTimer = {
          state: payload.new.state,
          time: payload.new.time,
        };
        setTimer(newTimer);
      }
    )
    .subscribe();

  const handleTimer = () => {
    const state = true;
    const time = "25:00";
    setSupabaseTimer(state, time);
  };

  return (
    <main className="grid place-content-center h-screen bg-pattern bg-tremor-background-muted dark:bg-dark-tremor-background-muted">
      <Timer handleTimer={handleTimer} time={timer?.time} />
    </main>
  );
}

export default App;
