import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cocktailReducer from "./cocktailListReducer";
//root reducer

const reducers = combineReducers({
  cocktailList: cocktailReducer,
  user: userReducer,
});

export default reducers;
