import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
