import React, { useContext, useState } from "react";

//   make a context like ItemContext in this case
//  wrap the context with nameofContext.Provider and add value
//  pass that value using useContext(nameofContext)

const ItemContext = React.createContext();

export const App = () => {
  const [items, setItem] = useState([
    {
      name: "banana",
      id: 1,
    },
    {
      name: "guava",
      id: 2,
    },
    {
      name: "apple",
      id: 3,
    },
  ]);

  const removeItem = (id) => {
    const newItem = items.filter((item) => item.id !== id);
    setItem(newItem);
  };
  return (
    <ItemContext.Provider value={{ removeItem, data: "hello" }}>
      <List items={items} />
    </ItemContext.Provider>
  );
};

const List = ({ items }) => {
  return (
    <main>
      {items.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </main>
  );
};

const ListItem = ({ name, id }) => {
  const { data } = useContext(ItemContext);
  console.log(data);

  const { removeItem } = useContext(ItemContext);

  //   console.log(prop);
  return (
    <>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <button onClick={() => removeItem(id)}>remove</button>
    </>
  );
};
