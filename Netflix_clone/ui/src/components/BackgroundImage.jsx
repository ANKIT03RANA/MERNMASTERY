import React from 'react'
import styled from "styled-components"
import background from "../images/Netflix.webp"

function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  )
}
const Container= styled.div`
    height:100vh;
    width:100vw;
    overflow-y:hidden;
    .img{
        height:100vh;
        width:100vw
    }

`;

export default BackgroundImage
