import { useSelector, useDispatch } from "react-redux";
import { useQuery, gql } from "@apollo/client";
import "./Shop.css";
import { AiFillStar } from "react-icons/ai";
function ShopCocktails(props) {
  //   const { data, loading, error, refetch } = useQuery(GET_COCKTAILS);

  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
  const store = useSelector((state) => state);

  return (
    <div className="container">
      {store.cocktailList.map((item) => (
        <div className="cocktail-box">
          <img
            alt="cocktail"
            src={item.image}
            width="300px"
            height="400px"
          ></img>
          <div>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <div className="price-button">
            <h3>$ {item.price}</h3>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
      here
    </div>
  );
}

export default ShopCocktails;
