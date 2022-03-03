const cocktailReducer = (state = [], action) => {
  switch (action.type) {
    case "SETCOCKTAILLIST":
      return [...action.payload];
    default:
      return state;
  }
};

export default cocktailReducer;
