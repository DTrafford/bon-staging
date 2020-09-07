import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    margin-top: 20px;
`;

export const Image = styled.img`
    height: 100%;
    margin-bottom: 0px;
`;

export const Legend = styled.p`
    background-color: #C36A82 !important;
    font-size: 30px !important;
    // font-family: "Gayathri", cursive !important;
    @media(max-width: 800px) {
        font-size: 20px !important;
    }
    @media(max-width: 400px) {
        font-size: 16px !important;
    }
`;