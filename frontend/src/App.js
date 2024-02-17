import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import "./App.css";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import MyNotes from "./components/screens/MyNotes/MyNotes";
import RegisterScreen from "./components/screens/RegisterScreen/RegisterScreen";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/mynotes" element={<MyNotes />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
