import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
const slideInLeftAnimation = keyframes`${slideInLeft}`;

export const Wrapper = styled.div`
    padding-top: 100px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 200px;
    diplay: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    // line-height: 1.5;

    // @media(max-width: 750px) {
    //   padding-bottom: 1100px;
    // }
    // @media(max-width: 450px) {
    //   padding-bottom: 1300px;
    // }
}
`;

export const Title = styled.div`
  animation: 1s ${slideInLeftAnimation};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 65px;
  text-decoration: underline;
  margin-bottom: 20px;
  @media(max-width: 600px) {
    font-size: 50px;
  }
}
`;
export const Content = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 30px;
  text-align: left;
  @media(max-width: 600px) {
    font-size: 25px;
  }
}
`;
