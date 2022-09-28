import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <span className="book">📖</span> Dictionary App
        </h1>
        <main>
          <Dictionary />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
