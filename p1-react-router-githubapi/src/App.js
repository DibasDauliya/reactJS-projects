import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Item } from "./component/People";
import { PersonList } from "./component/PersonList";
import { useFetch } from "./useFetch";

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <Link to="/">Go Home</Link>
    </>
  );
};

function App() {
  const { items, isLoading } = useFetch(`https://api.github.com/users`);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">item 2</Link>
          </li>
          <li>
            <Link to="">item 3</Link>
          </li>
          <li>
            <Link to="">item 4</Link>
          </li>
          <li>
            <Link to="">item 5</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          {isLoading ? "Loading ..." : <Item items={items} />}
        </Route>
        <Route path="/user/:username" children={PersonList}>
          <PersonList />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
