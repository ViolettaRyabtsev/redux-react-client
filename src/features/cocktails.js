import { createSlice } from "@reduxjs/toolkit";
import { useQuery, gql } from "@apollo/client";

export const cocktailSlice = createSlice({
  name: "cocktailList",
  initialState: { value: [] },
  reducers: {
    setCocktailList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCocktailList } = cocktailSlice.actions;
export default cocktailSlice.reducer;
