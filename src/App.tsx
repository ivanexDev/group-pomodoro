import { useState } from "react";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import SettingsForm from "./components/SettingsForm";

type Timer = {
  time: string;
  state: boolean;
};

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <main className="grid place-content-center h-screen bg-pattern bg-tremor-background-muted dark:bg-dark-tremor-background-muted">
        <Timer
          handleShowModal={() => setShowModal(true)}
        />

          <Modal handleClose={() => setShowModal(false)} showModal={showModal}>
            <SettingsForm />
          </Modal>

      </main>
    </>
  );
}

export default App;
