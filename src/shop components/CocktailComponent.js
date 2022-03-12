import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCocktail } from "../state/action-creators/index";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const CocktailComponent = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  //   const { selectCocktail } = bindActionCreators(actionCreators, dispatch);

  const { selectCocktail } = bindActionCreators(actionCreators, dispatch);

  const setCocktailDetail = () => {
    console.log(props.id, props.text);

    selectCocktail({
      id: props.id,
      name: props.name,
      image: props.image,
      text: props.text,
      price: props.price,
    });
  };

  console.log(store, "store details");

  return (
    <div className="cocktail-box" onClick={setCocktailDetail}>
      <Link to={`/shop/${props.id}`}>
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
          <button>Add to Cart</button>
        </div>
      </Link>
    </div>
  );
};

export default CocktailComponent;
