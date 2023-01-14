import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { QuoteProvider } from "./contexts/QuoteContext";
import { BookmarksPage, HomePage } from "./pages";
import { ScrollToTop } from "./utils";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <QuoteProvider>
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
          </Routes>
        </BrowserRouter>
      </QuoteProvider>
    </div>
  );
}

export default App;
