const addToLocalStorage = (id) => {
  let shopingCart;
  localStorage.setItem("Shoping-cart", id);
};

export { addToLocalStorage };
