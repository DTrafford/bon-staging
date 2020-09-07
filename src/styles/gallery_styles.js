import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";
const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const Wrapper = styled.div`
  // background-color: #ffffff;
  // background-image: url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c36a82' fill-opacity='0.4'%3E%3Cpath d='M2 0h2v12H2V0zm1 20c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM9 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-1 4h2v12H8V12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-color: #eeecf2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23ea6894' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  min-height: 100vh;
  @media(max-width: 600px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const HeaderContainer = styled.div`
  padding-top: 150px;
  padding-bottom: 100px;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GalleryTitle = styled.div`
  animation: 1s ${bounceInDownAnimation};
  font-family: "Satisfy", cursive;
  max-width: 100%;
  font-size: 125px;
  // display: grid;
  text-decoration: underline;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    font-size: 75px;
  }
`;

export const ErrorDiv = styled.div`
  width: 50%;
  height: 50%;
  background-color: #FFF;
  color: #C36A82;
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
  text-align: center;
  border-radius: 20px;
  @media(max-width: 1100px) {
    width: 75%;
  }
  @media(max-width: 800px) {
    width: 85%;
  }
  @media(max-width: 600px) {
    width: 95%;

  }
`;
