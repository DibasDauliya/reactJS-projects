import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UsestateArray from "./components/UsestateArray";
import UsestateObjects from "./components/UsestateObjects";
import Nav from "./components/Nav";

function App() {
  const Home = () => {
    return <h1>Welcome to the Home, Sweet Home!</h1>;
  };
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/UsestateArray" component={UsestateArray} />
          <Route path="/UsestateObjects" component={UsestateObjects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
