function Stats({ itemLength, itemPercentage, packedItems }) {
  return (
    <footer className="stats">
      {packedItems === itemLength ? (
        <em>You have everything that you need! You are ready to go! ✈️</em>
      ) : (
        <em>
          🙈 You have {itemLength} items on your list, and you already packed{" "}
          {packedItems} ({itemPercentage}%)
        </em>
      )}
      {/* <em>
        🙈 You have {itemLength} items on your list, and you already packed{" "}
        {packedItems} ({itemPercentage}%)
      </em> */}
    </footer>
  );
}

export default Stats;
