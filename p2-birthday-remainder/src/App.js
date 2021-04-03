import { useState } from "react";
import { data } from "./Data";

function App() {
  const [items, setItems] = useState(data);

  return (
    <main>
      <h2>There are {items.length} birthdays.</h2>
      {items.map(({ id, ...item }) => (
        <ItemList key={id} {...item} />
      ))}
      <button onClick={() => setItems([])}>Clear All</button>
    </main>
  );
}

const ItemList = ({ image, name, age }) => {
  // console.log(prop);
  return (
    <div className="flex container">
      <img src={image} alt="" />
      <div className="sub-container flex">
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default App;
