import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products.js";
import ItemList from "../components/itemlist.jsx";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        setItems(data.filter((p) => p.category === categoryId));
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
