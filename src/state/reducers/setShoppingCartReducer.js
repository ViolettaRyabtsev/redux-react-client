const setShoppingCart = (state = [], action) => {
  switch (action.type) {
    case "SET_SHOPPING_CART":
      return [...action.payload];
    default:
      return state;
  }
};

export default setShoppingCart;
