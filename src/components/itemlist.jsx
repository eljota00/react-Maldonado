import Item from "../Item.jsx";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemList;
