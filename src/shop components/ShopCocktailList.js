import { useSelector, useDispatch } from "react-redux";
import { useQuery, gql } from "@apollo/client";
import "./Shop.css";

import CocktailComponent from "./CocktailComponent";

function ShopCocktails() {
  //   const { data, loading, error, refetch } = useQuery(GET_COCKTAILS);

  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
  const store = useSelector((state) => state);

  return (
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
      here
    </div>
  );
}

export default ShopCocktails;
