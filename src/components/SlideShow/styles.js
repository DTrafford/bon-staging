import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    // margin-top: 20px;
    // height: 100vh;
    max-height: 80vh;
    position: relative;
    flex-direction: column;
    // position:fixed;
    // top:0;
    // left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible !important;
    z-index: 999;
`;

export const Image = styled.img`
    height: 100%;
    margin-bottom: 0px;
    width: 100%;
    max-height: 100%;
`;

export const Legend = styled.div`
    position: absolute;
    bottom:  calc(0% - 207px) !important;
    z-index: 999;
    overflow-y: visible !important;
    // bottom: calc(50% - 250px) !important;
    left: 0;
    // left: calc(50% - 350px);
    // margin-left: -45%;
    // width: 90%;
    // opacity: 0.25;
    // background-color: #C36A82 !important;
    // background-color: rgba(195,106,130, 0.5) !important;
    border-radius: 40px;
    font-size: 30px !important;
    // z-index: 2;
    // font-family: "Gayathri", cursive !important;
    @media(max-width: 800px) {
        font-size: 20px !important;
    }
    @media(max-width: 600px) {
        bottom:  calc(0% - 135px) !important;
    }
    @media(max-width: 400px) {
        font-size: 16px !important;
    }
`;