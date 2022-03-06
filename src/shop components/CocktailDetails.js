//select product from redux
import { actionCreators } from "../state/index";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

function CocktailDetails(props) {
  const cocktailDetails = useSelector((state) => state.selectCocktail);
  console.log(cocktailDetails, "details component");

  return (
    <div>
      <div>
        <img
          width="500px"
          height="600px"
          src={cocktailDetails.image}
          alt={cocktailDetails.name}
        ></img>
      </div>
      <div>{cocktailDetails.text}</div>
      <div>{cocktailDetails.price}</div>
      <div>{cocktailDetails.name}</div>
    </div>
  );
}

export default CocktailDetails;
