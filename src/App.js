import React, { useState } from "react";
import styles from "./App.module.css";
import List from "./components/List";
import NewItem from "./components/NewItem";

const App = () => {
  const [items, setItems] = useState([]);

  const saveData = (item) => {
    setItems((prevData) => {
      return [item, ...prevData];
    });
  };

  let content = (
    <ul className={styles.list}>
      <li className={styles["list-item"]}>
        <p>Sorry, no fields found.</p>
      </li>
    </ul>
  );

  if (items.length > 0) {
    content = <List items={items} />;
  }

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <NewItem onAddItem={saveData} />
        {content}
      </div>
    </section>
  );
};

export default App;
