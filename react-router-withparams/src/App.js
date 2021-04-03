import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { People } from "./People";
import { Person } from "./Person";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/People">People</Link>
      </li>
      <li>
        <Link to="">Item 3</Link>
      </li>
      <li>
        <Link to="">Item 4</Link>
      </li>
      <li>
        <Link to="">Item 5</Link>
      </li>
    </ul>
    <hr />
  </nav>
);

const Home = () => <h1>Home</h1>;
const NotFound = () => <h1>NotFound</h1>;

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/people">
          <People />
        </Route>

        <Route path="/person/:id" children={Person}>
          <Person />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
