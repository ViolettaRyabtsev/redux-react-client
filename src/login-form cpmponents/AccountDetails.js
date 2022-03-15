import { useSelector } from "react-redux";
import "./account-details.css";
const AccountDetails = () => {
  const store = useSelector((state) => state);
  console.log(store, "store from details");
  return (
    <div className="account-details-body">
      <div className="account-details">
        <h2>Account Details</h2>
        hello, {store.user.username}
        <div>user name</div>
        <div>Address</div>
        <button>view addresses</button>
        <button>log out</button>
      </div>
      <div className="order-history">
        <h2>Order History</h2>
        <ul>
          <li>order</li>
          <li>date</li>
          <li>payment status</li>
          <li>total</li>
        </ul>
        <div className="body">
          <div>us1234</div>
          <div>june 12</div>
          <div> paid</div>
          <div>$127</div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
