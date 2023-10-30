import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../actions/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const changeHandler = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleSubmit = () => {
    dispatch(signin(form, navigate));
  };

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>LogIn</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                placeholder="Email ID"
                name="email"
                value={form.email}
                onChange={changeHandler}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={changeHandler}
              />
              <button onClick={HandleSubmit}>Sign In</button>
            </div>
          </div>
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
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button{
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
    }
  }
`;

export default Login;
