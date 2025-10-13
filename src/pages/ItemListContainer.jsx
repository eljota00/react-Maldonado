import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllProducts, fetchProductsByCategory } from "../services/ProductsService";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const data = categoryId
        ? await fetchProductsByCategory(categoryId)
        : await fetchAllProducts();
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos disponibles</p>;

  return <ItemList products={products} />;
}
