import React, { useState } from "react";
import "./App.css";
import SignInForm from "./login-form cpmponents/SignInForm";
import { useSelector, useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { Routes, Route, Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
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

function NavBar() {
  const [popUp, setPopUp] = useState(false);
  const [popUpCart, setPopUpCart] = useState(false);

  const store = useSelector((state) => state);

  // const list = useSelector((state) => state.cocktailList.value);
  const dispatch = useDispatch();
  // const { data, loading, error } = useQuery(GET_COCKTAILS);
  const { setUserName } = bindActionCreators(actionCreators, dispatch);

  const handleClick = () => {
    setPopUp(true);
    if (popUp) {
      setPopUp(false);
    }
  };

  const handleLogOut = () => {
    setUserName({ id: "", username: "" });
  };

  const handleOpenCart = () => {
    setPopUpCart(true);
    if (popUpCart) {
      setPopUpCart(false);
    }
  };

  return (
    <div className="navBar">
      <h2>logo</h2>
      <div className="navigation">
        <h3>
          <Link to="/shop">Shop</Link>
        </h3>
        <h3>
          {" "}
          <Link to="/contact">Contact us</Link>
        </h3>
        <h3>
          {" "}
          <Link to="/">About us</Link>
        </h3>
      </div>
      <div className="user-section">
        {store.user.username === "" ? (
          <h3 onClick={handleClick}>SignIn</h3>
        ) : (
          <h3 onClick={handleLogOut}>Log out</h3>
        )}
        <h3 onClick={handleOpenCart}>Shopping Cart</h3>

        <h3>Gift Cards</h3>
      </div>
      {popUp ? (
        <div className="popUp-login">
          <SignInForm closePopup={() => setPopUp(false)} />
        </div>
      ) : null}
    </div>
  );
}

export default NavBar;
