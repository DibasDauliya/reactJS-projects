import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      setData(data.data);
    };
    getData();
  }, []);

  function onChange(q) {
    setValue(q, () => console.log(value));
    console.log(value);
    // let newData = data.filter((dta) =>
    //   dta.name.toLowerCase().includes(value.toLowerCase())
    // );
    // setData(newData);
    // console.log(newData);
  }
  return (
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Card data={data} />
    </div>
  );
}

export default App;
