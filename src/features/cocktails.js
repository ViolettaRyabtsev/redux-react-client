import { createSlice } from "@reduxjs/toolkit";

import { useQuery, gql } from "@apollo/client";

export const GET_COCKTAILS = gql`
  query {
    cocktailList {
      id
      name
      image
      text
      price
    }
  }
`;

export const cocktailSlice = createSlice({
  name: "Cocktails list",
  initialState: { value: ["hi", "hello"] },
  reducers: {
    setCocktailList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const setCocktailList = cocktailSlice.actions;
export default cocktailSlice.reducer;
