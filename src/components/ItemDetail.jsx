import ItemCount from "./ItemCount.jsx";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <h3>{product.name}</h3>
      <img src={product.img} alt={product.name} />
      <p>Precio: ${product.price}</p>
      <ItemCount stock={5} initial={1} />
    </div>
  );
};

export default ItemDetail;
