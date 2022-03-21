import { useSelector, useDispatch } from "react-redux";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { Parallax, Background } from "react-parallax";
import "./Shop.css";

import CocktailComponent from "./CocktailComponent";

function ShopCocktails() {
  //   const { data, loading, error, refetch } = useQuery(GET_COCKTAILS);
  const [seacrhCocktail, setSearchCocktailList] = useState("");

  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
  const store = useSelector((state) => state);
  console.log(seacrhCocktail, "cocktail");
  return (
    <div>
      <div className="shop-header">
        <div className="searchBar-shop">
          <input
            onChange={(e) => setSearchCocktailList(e.target.value)}
            type="text"
          />
          <img width="400px" height="90px" src="./drinks.png" alt="logo"></img>{" "}
        </div>

        <div className="shop-header-nav">
          <ul style={{ "list-style-type": "none" }}>
            <li>Birthday Party</li>
            <li> Gender Reveal Party </li>
            <li> Bachelorette Party</li>
          </ul>
        </div>
      </div>
      <div className="advertising">
        <h2>Free express shipping on orders over $100</h2>
      </div>
      <div className="container">
        {store.cocktailList
          .filter((item) => item.name.toLowerCase().includes(seacrhCocktail))
          .map((item) => (
            <CocktailComponent
              name={item.name}
              image={item.image}
              text={item.text}
              price={item.price}
              id={item.id}
            />
          ))}
      </div>
      here
    </div>
  );
}

export default ShopCocktails;
