import styled, { keyframes } from "styled-components";
// import headerBackground from "../../assets/images/background-1.jpg";
import headerBackground from "../assets/images/background-1.svg";
import logo from "../assets/images/KIMLOGO-01.png";

export const Wrapper = styled.div`
  background-color: #ede9f4;
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23BB6077' fill-opacity='0.11' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

export const HeroImage = styled.img`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 0px;
  @media(max-width: 750px) {
    margin-top: 50px;
  }
  max-height: 100vh;
`;
export const HeroImageDiv = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(${logo});
  height: 900px;
`;
export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    align-items: center;
    padding: 100px;
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
    background-image: url(${headerBackground})
    clip-path: polygon(
        0 0, /* left top */
        100% 0, /* right top */ 
        100% 75%, /* right bottom */
        0 100% /* left bottom */
    );
      border: 3px solid red;
`;

export const ImageContainer = styled.div`
  // width: 100%;
  // height: 100%;
  margin: 20px;
`;

export const Card = styled.div`
  display: grid;
  margin: 20px;
  // background-color: white;
  border-radius: 20px;
  box-shadow: 0 14px 18px 0 rgba(0, 0, 0, 0.26);
  // transition: 0.3s;
  height: 90%;
  justify-content: center;
  align-items: center;
  padding: 10px 30px 10px 30px;
  background-color: #bb6077;
  color: white;
  font-family: "Spicy Rice", cursive;
`;
