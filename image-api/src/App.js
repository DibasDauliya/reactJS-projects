import axios from "axios";
import { useEffect, useState } from "react";
import Image from "./components/Image";
import Search from "./components/Search";

function App() {
  const [img, setImg] = useState([]);
  const [value, setValue] = useState("cars");

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: value,
        },
        headers: {
          Authorization: `Client-ID Hh7xrS6llCSyHOcnRoZjM4xGp0tNRuTvdzROWvNVwUE`,
        },
      });
      setImg(data.data.results);
    };
    getData();
  }, [value]);

  console.log(value);

  return (
    <div className="App">
      <Search getValue={(q) => setValue(q)} />
      <Image imgs={img} />
    </div>
  );
}

export default App;
