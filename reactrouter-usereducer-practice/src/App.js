import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { Page } from "./components/Page";
import { Practice } from "./components/Practice";

const Home = () => <h1>Welcome to the Sweet Home!</h1>;

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/page1"
          render={(props) => (
            <Page
              header="1"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur. Commodi vel eius voluptatum tempora."
              {...props}
            />
          )}
        />
        <Route path="/page2">
          {/* using render is equivalent to this. this will not rerender each time component changes*/}

          {Page({
            header: "2",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi quaerat ea, expedita rem aliquid nisi doloremque cumque quidem incidunt, qui voluptas nostrum tempore corrupti quae accusamus eos magni vero! Harum sint accusamus excepturi hic, molestias nulla quidem quo deleniti?",
          })}

          {/* using component is equivalent it this, this will rerender each time component changes */}
          {/* <Page
            header="2"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi quaerat ea, expedita rem aliquid nisi doloremque cumque quidem incidunt, qui voluptas nostrum tempore corrupti quae accusamus eos magni vero! Harum sint accusamus excepturi hic, molestias nulla quidem quo deleniti?"
          /> */}
        </Route>
        <Route path="/practice1" component={Practice} />
      </Switch>
    </Router>
  );
}

export default App;
