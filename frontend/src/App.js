import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import "./App.css";
import LandingPage from "./components/screens/LandingPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main style={{ minHeight: "93vh" }}>
        <LandingPage></LandingPage>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
