import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cocktailReducer from "./cocktailListReducer";
import setCocktailReducer from "./setCocktailReducer";
//root reducer

const reducers = combineReducers({
  cocktailList: cocktailReducer,
  user: userReducer,
  selectCocktail: setCocktailReducer,
});

export default reducers;
