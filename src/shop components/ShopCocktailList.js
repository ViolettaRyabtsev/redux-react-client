import { useSelector, useDispatch } from "react-redux";
import { useQuery, gql } from "@apollo/client";
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlineSwitchAccount } from "react-icons/md";
import "./Shop.css";

import CocktailComponent from "./CocktailComponent";

function ShopCocktails() {
  //   const { data, loading, error, refetch } = useQuery(GET_COCKTAILS);

  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
  const store = useSelector((state) => state);

  return (
    <div>
      <div className="shop-header">
        <div className="searchBar-shop">
          <input type="text" />
          <div className="SHOP-LOGO"> Cocktail list</div>
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
        {store.cocktailList.map((item) => (
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
