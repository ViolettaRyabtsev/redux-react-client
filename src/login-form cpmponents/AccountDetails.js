import { useSelector } from "react-redux";
import "./account-details.css";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const AccountDetails = () => {
  const store = useSelector((state) => state);
  console.log(store, "store from details");
  const dispatch = useDispatch();

  const { setUserName } = bindActionCreators(actionCreators, dispatch);

  const handleLogOut = () => {
    setUserName({ id: "", username: "" });
  };
  console.log(store);

  return (
    <div className="account-details-body">
      <div className="account-details">
        <h2>Account Details</h2>
        hello, {store.user.username}
        <div>user name</div>
        <div>Address</div>
        <button style={{ width: "200px", height: "40px" }}>
          view addresses
        </button>
        <button
          onClick={handleLogOut}
          style={{ width: "120px", height: "40px" }}
        >
          log out
        </button>
      </div>
      <div className="order-history">
        <h2>Order History</h2>
        <ul type="none">
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
      {store.user.username === "" ? <Navigate to="/" replace={true} /> : null}
    </div>
  );
};

export default AccountDetails;
