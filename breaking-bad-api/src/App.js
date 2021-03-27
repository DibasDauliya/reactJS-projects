import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  const [item, setitem] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setitem(data);
      setIsLoding(false);
      console.log(data);
    };
    getData();
  }, [query]);

  return (
    <section className="container">
      <h1>
        <span className="primary">Breaking Bad</span>
      </h1>
      <Search getQuery={(q) => setQuery(q)} />
      <Characters items={item} isLoding={isLoding} />
      <Footer />
    </section>
  );
}

export default App;
