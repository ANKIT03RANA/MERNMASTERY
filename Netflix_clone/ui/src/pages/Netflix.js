import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NetflixBG from "../images/NetflixBG.jpeg";
import movielogo from "../images/strangerThingslogo.png";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={NetflixBG} alt="HomeBG" className="background-image"/>
        <div className="container">
          <div className="logo"><img src={movielogo} alt="Movie logo"/></div>
          <div className="buttons flex">
            <button className="flex j-center a-center">
              <FaPlay onClick={()=>navigate("/player")}/> Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
    background-color:black;
    .hero{
        position: relative;
        .background-image{
            filter:brightness(60%);
        }
        img{
            height:100vh;
            width:100vw;
        }
        .container{
            position:absolute;
            bottom:5rem;
            .logo{
                img{
                    width:45%;
                    height:100%;
                    margin-left:5rem;
                }
            }
            .buttons{
                margin:5rem;
                gap:2rem;
                button{
                    font-size:1.4rem;
                    gap:1rem;
                    border-radius:0.2rem;
                    border:none;
                    padding:0.5rem;
                    padding-left:2rem;
                    padding-right:2.4rem;
                    cursor:pointer;
                    transition:0.3s ease-in-out;
                    &:hover{
                        opacity:0.8;
                    }
                    &:nth-of-type(2){
                        background-color:rgba(109,109,110,0.7);
                        color:white;
                        svg{
                            font-size:1.8rem;
                        }
                    }
                }
            }
        }
    }    
`;

export default Netflix;
