import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/Netflixlogo.png";
import { useDispatch } from "react-redux";
import { logIn } from "../actions/auth";

function Header(props) {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {/* <button
        onClick={() => {
          dispatch(logIn(!login));
          setLogin(!login);
        }}
      > */}
        <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
        {/* {login ? "Sign Up" : "Log In"} */}
      </button>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 3rem;
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
`;

export default Header;
