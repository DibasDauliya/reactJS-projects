import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddData } from "./components/AddData";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { ShowHide } from "./components/ShowHide";
import { Useref } from "./components/Useref";

function App() {
  const Home = () => <h1>Home, Sweet Home!</h1>;

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/showHide" component={ShowHide} />
        <Route path="/addData" component={AddData} />
        <Route path="/useRef" component={Useref} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
