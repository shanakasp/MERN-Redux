import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import "./App.css";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import MyNotes from "./components/screens/MyNotes/MyNotes";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/mynotes" element={<MyNotes />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
