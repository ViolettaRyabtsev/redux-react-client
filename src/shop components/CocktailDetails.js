//select product from redux
import { actionCreators } from "../state/index";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./Shop.css";

function CocktailDetails() {
  const cocktailDetails = useSelector((state) => state);

  const dispatch = useDispatch();
  const { setShoppingCart } = bindActionCreators(actionCreators, dispatch);

  const addToShoppingCart = () => {
    setShoppingCart([
      ...cocktailDetails.setShoppingCart,
      {
        count: 1,
        id: cocktailDetails.selectCocktail.id,
        name: cocktailDetails.selectCocktail.name,
        image: cocktailDetails.selectCocktail.image,
        text: cocktailDetails.selectCocktail.text,
        price: cocktailDetails.selectCocktail.price,
      },
    ]);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "70%",
        padding: "30px",
        display: "flex",
      }}
    >
      <img
        width="500px"
        height="600px"
        src={cocktailDetails.selectCocktail.image}
        alt={cocktailDetails.selectCocktail.name}
      ></img>
      <div style={{ "margin-left": "30px" }}>
        <h2 style={{ height: "20px" }}>
          {cocktailDetails.selectCocktail.name}
        </h2>
        <h3 style={{ "margin-left": "40px" }}>
          $ {cocktailDetails.selectCocktail.price}
        </h3>
        <h3>{cocktailDetails.selectCocktail.text}</h3>
        <button onClick={addToShoppingCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default CocktailDetails;
