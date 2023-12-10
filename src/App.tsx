import Timer from "./components/Timer"

type Timer = {
  time: string;
  state: boolean;
};

function App() {

  return (
    
    <main className="grid place-content-center h-screen bg-pattern bg-tremor-background-muted dark:bg-dark-tremor-background-muted">
      <Timer/>
    </main>
  );
}

export default App;
