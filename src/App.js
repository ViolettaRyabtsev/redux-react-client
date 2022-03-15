import "./App.css";
import { useQuery, gql } from "@apollo/client";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import ShopCocktails from "./shop components/ShopCocktailList.js";
import AccountDetails from "./login-form cpmponents/AccountDetails";
import MainPhoto from "./MainPhoto";
import SignInForm from "./login-form cpmponents/SignInForm";
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
        <Route path="/account" element={<SignInForm />}></Route>
        <Route path="/account/id" element={<AccountDetails />} />
      </Routes>
      <div>{store.user.username} login </div>
      <Footer />
    </>
  );
}

export default App;
