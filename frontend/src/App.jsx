import "./App.css";
import Landing from "./Pages/Landing";
import { Routes, Route } from "react-router-dom";
import StartGame from "./Pages/StartGame";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/StartGame" element={<StartGame />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
