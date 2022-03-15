import React, { useState } from "react";
import "../App.css";
import "./Form.css";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const ADD_USER = gql`
  mutation addUser($id: ID!, $username: String!, $password: String!) {
    addUser(id: $id, username: $username, password: $password) {
      id
      username
      password
    }
  }
`;

const SignInForm = (props) => {
  const [form, setForm] = useState({
    id: "",
    userName: "",
    password: "",
  });

  const [submit, setSubmit] = useState(false);

  const [correctForm, setCorrectForm] = useState(true);

  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  console.log(data);
  // const user = useSelector((state) => state.user.value);
  const store = useSelector((state) => state);
  console.log(store.user, "user name ");

  const dispatch = useDispatch();

  //redux
  const { setUserName } = bindActionCreators(actionCreators, dispatch);

  const matchCredentials = (username, password) => {
    const email_pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

    const password_pattern =
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$";

    if (username.match(email_pattern) && password.match(password_pattern)) {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if password or name not valid -> record on false;
    const isItMatch = matchCredentials(form.userName, form.password);

    console.log(isItMatch, "match");
    if (!isItMatch) {
      console.log("doesn't match");
      setCorrectForm(false);
    }
    if (form.userName.length === 0 || form.password.length === 0) {
      setCorrectForm(false);
    } else if (isItMatch) {
      //add to redux global state
      console.log(form, "local form");
      setUserName({ id: form.id, username: form.userName });

      addUser({
        variables: {
          id: Math.floor(Math.random() * 100),
          username: form.userName,
          password: form.password,
        },
      });

      setCorrectForm(true);

      setSubmit(true);
      console.log(form, "form");

      setForm({
        id: "",
        userName: "",
        password: "",
      });
    }
  };

  return (
    <div className="form-Login">
      <div className="text-login">
        <h3>Sign In</h3>
        <h3>
          Sign in to get your Frequent Steeper points and redeem your free
          rewards.
        </h3>
        <form onSubmit={handleSubmit}>
          <label>
            {correctForm ? null : (
              <h3>
                Oops! This doesn't match our records. Please check your spelling
                and try again.
              </h3>
            )}
            <input
              type="email"
              placeholder="Email"
              value={form.userName}
              onChange={(e) => setForm({ ...form, userName: e.target.value })}
            ></input>
          </label>
          <label>
            <input
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            ></input>
          </label>
          {submit ? <h3>User registered successfully</h3> : null}
          <button type="submit" className="signIn-button">
            Sign In
          </button>
          <h3>Don't have an Account? </h3>
          <button type="submit" className="signIn-button">
            Register Now
          </button>
          {submit ? (
            <Navigate to="/account/id" replace={true} />
          ) : (
            <div>hi</div>
          )}
        </form>
      </div>
    </div>
  );
};
export default SignInForm;
