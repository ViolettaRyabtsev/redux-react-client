import "./footer.css";

const Footer = () => {
  return (
    <div style={{ display: "flex" }} className="footer">
      <div className="shipping-return">
        <h2>Shipping and Returns</h2>{" "}
        <ul>
          <li>Shipping</li>
          <li>Returns</li>
        </ul>
      </div>
      <div className="getToKnow-us">
        <h2>Get to know Us</h2>
        <ul>
          <li>About Us</li>
          <li>Store Locations</li>
          <li>Journal</li>
        </ul>
      </div>
      <div className="my-account">
        <h2>My Account</h2>
        <ul>
          <li>Login</li>
          <li>Create Account</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
