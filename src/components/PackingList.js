import Item from "./Item";

function PackingList({ items, onDeleteItems, onChangeItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              onDeleteItems={onDeleteItems}
              onChangeItems={onChangeItems}
              key={item.id}
            ></Item>
          );
        })}
      </ul>
    </div>
  );
}

export default PackingList;
