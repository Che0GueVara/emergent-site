import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PawClean from "@/pages/PawClean";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PawClean />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
