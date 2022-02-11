import React, { useState } from "react";
import "./App.css";
import "./Form.css";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { gql, useMutation } from "@apollo/client";
import { setUserName } from "./features/user";

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

  // const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

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

      dispatch(setUserName({ id: form.id, username: form.userName }));

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
      props.closePopup();
    }
  };

  return (
    <div className="form-Login">
      <AiOutlineClose onClick={props.closePopup} className="close-button" />
      <div className="text-login">
        <h2>My Account</h2>
        <h3>
          Sign in to get your Frequent Steeper points and redeem your free
          rewards.
        </h3>
        <form onSubmit={handleSubmit}>
          <label>
            {correctForm ? null : (
              <h4>
                Oops! This doesn't match our records. Please check your spelling
                and try again.
              </h4>
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
          <h3>Create Account</h3>
        </form>
      </div>
    </div>
  );
};
export default SignInForm;
