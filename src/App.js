import "./App.css";
import { useEffect, useState } from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";
import { useQuery, gql } from "@apollo/client";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import ShopCocktails from "./Shop.js";
import MainPhoto from "./MainPhoto";
import ContactUs from "./ContactUs";
import { setCocktailList } from "./features/cocktails";

export const GET_NOTES = gql`
  query {
    notes {
      name
      text
      id
    }
  }
`;

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

function App() {
  const user = useSelector((state) => state.user.value);
  const list = useSelector((state) => state.cocktailList.value);

  // const { loading, error, data, refetch } = useQuery(GET_NOTES);
  const { data, loading, error } = useQuery(GET_COCKTAILS);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(data.cocktailList, "data from database");
    dispatch(setCocktailList(data.cocktailList));
  }, []);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPhoto />}></Route>
        <Route path="/shop" element={<ShopCocktails />}></Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route></Route>
      </Routes>

      <div>{user.username} login </div>
      <div>
        {data.cocktailList.map((item) => (
          <h4>{item.name}</h4>
        ))}{" "}
        cocktails{" "}
      </div>
    </>
  );
}

export default App;
