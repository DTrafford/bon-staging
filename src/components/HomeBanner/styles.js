import styled, { keyframes } from "styled-components";
// import headerBackground from "../../assets/images/background-1.jpg";
import headerBackground from "../../assets/images/background-1.svg";

export const Wrapper = styled.div`
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  overflow:hidden;
  -webkit-overflow-scrolling:touch;
  background-image: url(${headerBackground});
  clip-path: polygon(
    0 0,
    /* left top */ 100% 0,
    /* right top */ 100% 75%,
    /* right bottom */ 0 100% /* left bottom */
  );
  padding-bottom: 400px;
  font-family: "Gayathri", cursive !important;
`;

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    align-items: center;
    padding-top: 150px;
    font-family: "Gayathri", cursive !important;
    // background-size: cover;
    // background-position: center top;
    // background-attachment: fixed;
    // background-image: url(${headerBackground})
    // clip-path: polygon(
    //     0 0, /* left top */
    //     100% 0, /* right top */ 
    //     100% 75%, /* right bottom */
    //     0 100% /* left bottom */
    // );
`;

export const ImageContainer = styled.div`
  // width: 100%;
  // height: 100%;
  margin: 20px;
`;

export const Card = styled.div`
  display: grid;
  position: relative;
  // top:0;
  margin: 20px;
  border-radius: 20px;
  border: 2px solid #C36A82;
  box-shadow: 0 14px 18px 0 rgba(0, 0, 0, 0.26);
  transition: 0.3s;
  // height: 90%;
  justify-content: center;
  align-items: center;
  padding: 10px 30px 10px 30px;
  // background-color: #bb6077;
  background-color: rgba(255, 255, 254, 0.9);
  color: #bb6077;
  // color: white;
  font-family: "Gayathri" !important;
  z-index: 20;
  // @media(max-width: 800px) {
  //   height: 100%;
  // }
`;

export const CardBack = styled.div`
  background-color: rgba(255, 255, 254, 0.9);
  position: absolute;
  top: 50px;
  left: 10px;
  z-index: -1;
  height: 200px;
  width: 100%;
  border-radius: 20px;
`;

// export const CardBackText = styled.div`
//   visibility: hidden;
//   position: relative;
//   // top:0;
//   margin: 20px;
//   border-radius: 20px;
//   // box-shadow: 0 14px 18px 0 rgba(0, 0, 0, 0.26);
//   // transition: 0.3s;
//   height: 90%;
//   justify-content: center;
//   align-items: center;
//   padding: 10px 30px 10px 30px;
//   // background-color: #bb6077;
//   background-color: rgba(255, 255, 254, 0.5);
//   color: #bb6077;
//   // color: white;
//   font-family: "Gayathri" !important;
//   z-index: 20;
// `;
