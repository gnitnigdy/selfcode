import Form from "../components/Form";
import Logo from "../components/Logo";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function LandingPage() {
  const [items, setItems] = useState(initialItems);
  function handleAddNewItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleUpdateItem(id) {
    //setItems((items) => items.map(item => item.id === id ?{...item, packed: !item.packed : item})));
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        } else {
          return item;
        }
      })
    );
  }

  const itemLength = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentageItems = Math.round((packedItems / itemLength) * 100);
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddNewItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onChangeItems={handleUpdateItem}
      />
      <Stats
        itemLength={itemLength}
        itemPercentage={percentageItems}
        packedItems={packedItems}
      />
    </div>
  );
}

export default LandingPage;
