import "./App.css";
import logo from "./logo.svg";
import Data from "./Data";

function App() {
  return (
    <div className="App">
      <h1>
        <span className="primary">ReactJS</span> Projects
        <img className="App-logo" src={logo} alt="" />
      </h1>

      <Data />
    </div>
  );
}

export default App;
