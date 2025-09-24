export const products = [
  { id: "1", name: "Camiseta River 2025", category: "camisetas", price: 200, img: "https://via.placeholder.com/200x200" },
  { id: "2", name: "Camiseta Boca 2025", category: "camisetas", price: 210, img: "https://via.placeholder.com/200x200" },
  { id: "3", name: "Short Adidas", category: "indumentaria", price: 90, img: "https://via.placeholder.com/200x200" },
  { id: "4", name: "Zapatillas Nike", category: "calzado", price: 150, img: "https://via.placeholder.com/200x200" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id === id));
    }, 1000);
  });
};
