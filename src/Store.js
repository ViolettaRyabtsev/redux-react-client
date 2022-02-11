import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./features/user";
import setReducer from "./features/cocktails";

export default configureStore({
  reducer: {
    user: useReducer,
    cocktailList: setReducer,
  },
});
