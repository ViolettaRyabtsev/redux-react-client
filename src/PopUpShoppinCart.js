import "./App.css";
import "./shopping-cart.css";
function PopUpShoppingCart() {
  return (
    <div className="shopping-cart">
      <h2> Your Cart()</h2>
      <div className="shopping-cart-items">section</div>
      <div>
        <div>Subtotal</div>
        <button>VIEW CART</button>
      </div>
    </div>
  );
}

export default PopUpShoppingCart;
