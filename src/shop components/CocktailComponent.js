import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const CocktailComponent = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  //   const { selectCocktail } = bindActionCreators(actionCreators, dispatch);

  const { selectCocktail, setShoppingCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const setCocktailDetail = () => {
    selectCocktail({
      id: props.id,
      name: props.name,
      image: props.image,
      text: props.text,
      price: props.price,
    });
  };

  const addToShoppingCart = () => {
    const newCart = [...store.setShoppingCart];
    let itemIsPresent = false;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].name === props.name) {
        newCart[i].price += props.price;
        newCart[i].count += 1;
        itemIsPresent = true;
        break;
      }
    }

    if (!itemIsPresent) {
      const obj = {
        count: 1,
        id: props.id,
        name: props.name,
        image: props.image,
        text: props.text,
        price: props.price,
      };
      newCart.push(obj);
    }

    setShoppingCart(newCart);
  };

  console.log(store, "store details");

  return (
    <div className="cocktail-box">
      <Link to={`/shop/${props.id}`} onClick={setCocktailDetail}>
        <img
          alt="cocktail"
          src={props.image}
          width="300px"
          height="400px"
        ></img>
        <div>
          <h3>{props.name}</h3>
          <p>{props.text}</p>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="price-button">
          <h3>$ {props.price}</h3>
        </div>
      </Link>
      <button onClick={addToShoppingCart}>Add to Cart</button>
    </div>
  );
};

export default CocktailComponent;
