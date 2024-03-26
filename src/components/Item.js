function Item({ item, onDeleteItems, onChangeItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onChangeItems(item.id)}
      ></input>
      <span
        style={item.packed === true ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
export default Item;
