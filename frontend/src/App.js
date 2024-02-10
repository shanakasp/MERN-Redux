import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main style={{ minHeight: "93vh" }}></main>
      <Footer></Footer>
    </div>
  );
}

export default App;
