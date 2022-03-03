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
