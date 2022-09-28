import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <span className="book">📖</span> Dictionary App
        </h1>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
