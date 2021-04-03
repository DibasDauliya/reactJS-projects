import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <main>
      <section className="section menu">
        <div className="title">
          <h1>our menu</h1>
          <div className="underline"></div>
        </div>
        <Categories filterCategory={filterCategory} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
