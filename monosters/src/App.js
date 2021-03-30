import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  // this will not change, so we filter data properly
  const [adata, setaData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      setData(data.data);

      // this will not change
      setaData(data.data);
    };
    getData();
  }, []);

  function onChange(q) {
    setValue(q);
    let newData = adata.filter((dta) =>
      dta.name.toLowerCase().includes(q.toLowerCase())
    );

    setData(newData);

    console.log(newData);
  }
  return (
    <div className="container">
      <input
        placeholder="Enter the name you wanna filter"
        style={{ padding: "5px 7px", width: "70%", fontSize: "1.2rem" }}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Card data={data} />
    </div>
  );
}

export default App;
