import React from "react";
import { addToLocalStorage } from "../utilities/Utilities";

const Products = (props) => {
  const { name, price, id } = props.product;

  const handleCart = (id) => {
    addToLocalStorage(id);
  };
  return (
    <div style={{ border: "2px solid red", margin: "15px", padding: "5px" }}>
      <h1>Name:{name}</h1>
      <h4>Price: {price}</h4>
      <button onClick={() => handleCart(id)}>Add to cart</button>
    </div>
  );
};

export default Products;
