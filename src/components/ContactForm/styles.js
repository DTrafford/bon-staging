import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
const slideInLeftAnimation = keyframes`${slideInLeft}`;

export const FormWrapper = styled.div`
    padding-top: 100px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 200px;
    margin-bottom: 100px;
    diplay: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    @media(max-width: 600px) {
        padding-left: 0px;
        padding-right: 0px;
        padding-bottom: 100px;
    }
}
`;

export const FormRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    @media(max-width: 1000px) {
        flex-direction: column;
    }
`;

export const FormItem = styled.div`
    width: 45%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media(max-width: 1000px) {
        width: 90%;
        // justify-content: center;
        margin-bottom: 20px;
        margin-right: 10%;
    }
    @media(max-width: 600px) {
        width: 100%;
        // justify-content: center;
        margin-bottom: 20px;
        margin-right: 1%;
        flex-direction: column;
    }
`;


export const FormLabel = styled.label`
    font-weight: bold;
    font-family: "Gayathri", cursive !important;
    margin-right: 10px;
    margin-bottom: 0px;
    color: #C36A82;

`;
export const FormInput = styled.input`
    border-radius: 10px;
    margin-right: 10px;
    border: 1px solid #C36A82;
    width: 70%;
    @media(max-width: 600px) {
        width: 90%;
    }
`;

export const FormTextArea = styled.textarea`
    border-radius: 10px;
    margin-right: 10px;
    border: 1px solid #C36A82;
    width: 70%;
    height: 200px;
    @media(max-width: 600px) {
        width: 90%;
    }
`;

export const SubmitButton = styled.button`
    border-radius: 10px;
    border: 1px solid #C36A82;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: #C36A82;
    font-weight: bold;
`;