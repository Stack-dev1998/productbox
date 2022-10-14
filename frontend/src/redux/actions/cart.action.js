export const adddToCart = (payload) => {
  return {
    type: "ADDTOCART",
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: "REMOVEFROMCART",
    payload,
  };
};
