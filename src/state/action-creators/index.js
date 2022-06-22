export const setCocktailList = (array) => {
  return (dispatch) => {
    dispatch({
      type: "SETCOCKTAILLIST",
      payload: array,
    });
  };
};

export const setUserName = (obj) => {
  return (dispatch) => {
    dispatch({
      type: "SETUSERNAME",
      payload: obj,
    });
  };
};

export const selectCocktail = (obj) => {
  return (dispatch) => {
    dispatch({
      type: "SELECT_COCKTAIL",
      payload: obj,
    });
  };
};

export const setShoppingCart = (arr) => {
  return (dispatch) => {
    dispatch({
      type: "SET_SHOPPING_CART",
      payload: arr, 
    });
  };
};
