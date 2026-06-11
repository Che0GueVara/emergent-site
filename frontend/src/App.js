import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/lib/i18n";
import PawClean from "@/pages/PawClean";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LangProvider defaultLang="fr"><PawClean /></LangProvider>} />
          <Route path="/en" element={<LangProvider defaultLang="en"><PawClean showAnnouncement={false} /></LangProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
