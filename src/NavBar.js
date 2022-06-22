import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { Routes, Route, Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { GoLocation } from "react-icons/go";
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
  const [cart, setCart] = useState([]);

  const store = useSelector((state) => state);

  // const list = useSelector((state) => state.cocktailList.value);
  // const dispatch = useDispatch();
  // const { data, loading, error } = useQuery(GET_COCKTAILS);
  // const { setUserName } = bindActionCreators(actionCreators, dispatch);

  const getTotalCountOfShoppingCart = () => {
    let res = 0;
    for (let i = 0; i < store.setShoppingCart.length; i++) {
      res += store.setShoppingCart[i].count;
      console.log(res);
    }
    return res;
  };

  return (
    <div className="navBar">
      <img width="120px" src="./logo.png" alt="logo"></img>
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
        <h3>
          <Link to="/account">
            {" "}
            <MdOutlineSwitchAccount className="icon" />
          </Link>
        </h3>
        <h3>
          <Link to="shopping-cart">
            <BsFillCartFill className="icon" />
            <span className="shoppingCart-number">
              {getTotalCountOfShoppingCart()}
            </span>
          </Link>
        </h3>
        <h3 style={{ "margin-left": "30px" }}>
          <GoLocation className="icon" />
        </h3>
      </div>
    </div>
  );
}

export default NavBar;
