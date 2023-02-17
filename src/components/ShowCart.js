import React from "react";

const ShowCart = () => {
  const cart = localStorage.getItem("shoping-cart");

  console.log(cart);
  return (
    <div style={{ border: "2px solid red", margin: "15px", padding: "5px" }}>
      <p>ID: {}</p>
      <p>Quantity: {}</p>
      <p>Total Price: {}</p>
    </div>
  );
};

export default ShowCart;
