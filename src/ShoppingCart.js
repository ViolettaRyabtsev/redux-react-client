import { useSelector } from "react-redux";
import "./shoppingCart.css";

const ShoppingCart = () => {
  const store = useSelector((state) => state);
  console.log(store.setShoppingCart, "shopping");

  return (
    <div className="cart-information">
      <h3 >Please check quantity is correct prior check out </h3>
      <div className="all-products">
        <table>
          <tr>
            <th style={{ "padding-left": "40px" }}>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {store.setShoppingCart.map((item) => (
            <tr>
              <td className="product">
                <img
                  width="150px"
                  height="200px"
                  src={item.image}
                  alt={item.name}
                ></img>
                <td style={{ "font-size": "22px" }}>{item.name}</td>
              </td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="subtotal">
        <div className="subtotal-price">
          <h2>Subtotal: </h2>
          <h2>price</h2>
        </div>
        <div className="buttons">
          <button className="button1">Update Bag</button>
          <button className="button2">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
