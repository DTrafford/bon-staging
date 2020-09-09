import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    margin-top: 20px;
    // height: 100vh;
    max-height: 100vh;
    // position:fixed;
    // top:0;
    // left:0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    height: 100%;
    margin-bottom: 0px;
    width: 100%;
`;

export const Legend = styled.p`
    position: absolute;
    bottom: 40% !important;
    leftt: 50%;
    margin-left: -45%;
    width: 90%;
    opacity: 0.25;
    background-color: #C36A82 !important;
    font-size: 30px !important;
    // z-index: 2;
    // font-family: "Gayathri", cursive !important;
    @media(max-width: 800px) {
        font-size: 20px !important;
    }
    @media(max-width: 400px) {
        font-size: 16px !important;
    }
`;