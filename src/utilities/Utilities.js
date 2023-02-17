const addToLocalStorage = (id) => {
  let shopingCart = {};
  const storedCart = localStorage.getItem("shoping-cart");

  if (storedCart) {
    shopingCart = JSON.parse(storedCart);
  }

  const quantity = shopingCart[id];

  if (quantity) {
    shopingCart[id] = quantity + 1;
  } else {
    shopingCart[id] = 1;
  }

  localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
};

export { addToLocalStorage };
