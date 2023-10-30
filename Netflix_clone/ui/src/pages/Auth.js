import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions/auth";
import { useNavigate } from "react-router-dom";

function Auth() {
    const [showpassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state)=>state.auth.isSignUp);
  console.log(state);
  // useEffect(()=>{},[showpassword]);
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(signup(form));
    navigate("/");
  };

  return (
    <Container showpassword={showpassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          {!state && <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel Anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>}
          <div className="form">
            {showpassword && (
              <input
                type="text"
                placeholder="First Name"
                required
                name="firstName"
                value={form.firstName}
                onChange={changeHandler}
              />
            )}
            {showpassword && (
              <input
                type="text"
                placeholder="Last Name"
                required
                name="lastName"
                value={form.lastName}
                onChange={changeHandler}
              />
            )}
            <input
              type="email"
              placeholder="Email ID"
              name="email"
              required
              value={form.email}
              onChange={changeHandler}
            />
            {(state || showpassword) && (
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={form.password}
                onChange={changeHandler}
              />
            )}
            {!state && !showpassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          {(state || showpassword) && <button onClick={handleSubmit}>{state? "Sign In": "Sign Up"}</button>}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-row: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showpassword }) =>
          showpassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

export default Auth
