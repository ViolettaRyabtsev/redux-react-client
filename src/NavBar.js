import React, { useState } from "react";
import "./App.css";
import SignInForm from "./SignInForm";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "./features/user";

function NavBar() {
  const [popUp, setPopUp] = useState(false);
  const user = useSelector((state) => state.user.value);
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

  return (
    <div className="navBar">
      <h2>logo</h2>
      <div className="navigation">
        <h3>Shop</h3>
        <h3> Contact us</h3>
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
