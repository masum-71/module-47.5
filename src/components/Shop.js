import React, { useEffect, useState } from "react";
import Products from "./Products";
import ShowCart from "./ShowCart";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <ShowCart></ShowCart>
      <h1>this is Shope</h1>
      {products.map((product) => (
        <Products key={product.id} product={product}></Products>
      ))}
    </div>
  );
};

export default Shop;
