const setCocktailReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_COCKTAIL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default setCocktailReducer;
