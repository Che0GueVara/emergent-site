import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/lib/i18n";
import PawClean from "@/pages/PawClean";

function App() {
  return (
    <div className="App">
      <LangProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PawClean />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </div>
  );
}

export default App;
