import React, { useState } from "react";
import "./App.css";
import SignInForm from "./SignInForm";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "./features/user";
import { setCocktailList } from "./features/cocktails";
import { gql, useQuery } from "@apollo/client";
import { Routes, Route, Link } from "react-router-dom";
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
  const user = useSelector((state) => state.user.value);
  // const list = useSelector((state) => state.cocktailList.value);

  // const { data, loading, error } = useQuery(GET_COCKTAILS);

  const dispatch = useDispatch();

  const handleClick = () => {
    setPopUp(true);
    if (popUp) {
      setPopUp(false);
    }
  };

  const handleLogOut = () => {
    dispatch(setUserName({ id: "", username: "" }));
  };

  // const handleClickShop = (event) => {
  //   event.preventDefault();
  //   console.log(data, "data");
  //   dispatch(setCocktailList(data.cocktailList));
  // };

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
        <h3> About</h3>
      </div>
      <div className="user-section">
        {user.username === "" ? (
          <h3 onClick={handleClick}>SignIn</h3>
        ) : (
          <h3 onClick={handleLogOut}>Log out</h3>
        )}
        <h3>Cart</h3>
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
