import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
