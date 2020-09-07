import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  background-color: #ede9f4;
  // background-image: url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23f400cc' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  @media(max-width: 992px) {
    float: none;
    text-align: center;
    padding: 10px;
  }
`;

export const SocialIcon = styled.img`
  height: 30px;
  width: 30px;
  fill: #FFF:
  stroke: #FFFF;
  color: #FFF;
  margin-bottom: 0px;
  margin-right: 10px;
`;