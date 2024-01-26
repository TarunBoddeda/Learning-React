const foodItems = () => {
  return (
    <div>
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default foodItems;
