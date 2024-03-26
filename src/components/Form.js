import { useState } from "react";

function Form({ onAddItems }) {
  //1. create state (controlled element technique)
  const [itemDesc, setItemDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!itemDesc) {
      return;
    }
    const newItem = {
      description: itemDesc,
      quantity,
      packed: false,
      id: Date.now(),
    };
    //steps to use controlled element technique
    console.log(newItem);
    onAddItems(newItem);
    setItemDesc("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      {/* 2. assign value with the state variable */}
      <input
        type="text"
        placeholder="Item . ."
        value={itemDesc}
        onChange={(event) => {
          //   console.log(event.target);
          setItemDesc(event.target.value);
        }}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
