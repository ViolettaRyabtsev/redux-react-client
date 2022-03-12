import "./App.css";
import { useQuery, gql } from "@apollo/client";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ShopCocktails from "./shop components/ShopCocktailList.js";
import MainPhoto from "./MainPhoto";
import ContactUs from "./contact-us component/ContactUs";
// import CocktailComponent from "./shop components/CocktailComponent";
import CocktailDetails from "./shop components/CocktailDetails";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useEffect } from "react";


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
  const store = useSelector((state) => state);
  const { data, loading, error } = useQuery(GET_COCKTAILS);

  console.log(store.user, "user");

  const dispatch = useDispatch();
  const { setCocktailList } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (data) {
      setCocktailList(data.cocktailList);
    }
  }, [loading]); 

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPhoto />}></Route>
        <Route path="/shop" element={<ShopCocktails />}></Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop/:id" element={<CocktailDetails />}></Route>
      </Routes>

      <div>{store.user.username} login </div>
      <div>
        {store.cocktailList.map((item) => (
          <h4>{item.name}</h4>
        ))}{" "}
        cocktails{" "}
      </div>
    </>
  );
}

export default App;
