import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const resData = await res.json();
      setItems(resData);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function removeItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Tours items={items} removeItem={removeItem} />
      )}
    </main>
  );
}

export default App;
