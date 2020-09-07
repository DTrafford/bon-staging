import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: 0, 2;
  shadow-radius: 10;
  width: 90%;
  margin-top: 100px;
  @media(max-width: 600px) {
    margin-top: 200px;
  }
  @media(max-width: 400px) {
    margin-top: 225px;
  }
`;

export const CardTitle = styled.div`
  font-family: "Gayathri", cursive !important;
  width: 100%;
  text-align: center;
  font-size: 50px;
  margin-top: 100px;
  padding-right: 25px;
  padding-left: 25px;
  color: #C36A82;
`;
