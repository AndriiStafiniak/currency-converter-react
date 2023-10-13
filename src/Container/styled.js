import styled from "styled-components"
const backgroundImage = require("./background.jpg")

export const Container = styled.div`
   background-image: url(${backgroundImage}) ;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
`;