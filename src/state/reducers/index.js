import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cocktailReducer from "./cocktailListReducer";
import setCocktailReducer from "./setCocktailReducer";
import setShoppingCart from "./setShoppingCartReducer";
//root reducer

const reducers = combineReducers({
  cocktailList: cocktailReducer,
  user: userReducer,
  selectCocktail: setCocktailReducer,
  setShoppingCart: setShoppingCart,
});

export default reducers;
