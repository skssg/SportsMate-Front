import styled from "styled-components";
import {FormGroup} from "@mui/material";
export const LoginWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
// export const FormContainer = styled.div`
//     width: 45%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;
export const StyledFormGroup = styled(FormGroup)`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const FindDiv = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const UnderLine = styled.div`
    width: 45%;
    border-bottom: 2px solid lightgray;
`
export const Descriptor = styled.span`
    align-self: start;
    padding: 4px;
    font-size: 20px;
    font-weight: 600;
    margin: 5px 0px 3px 0px;
`
interface InputWrapProps{
    width?:string;
}
export const InputWrap = styled.div<InputWrapProps>`
    width: ${(props) => props.width || '100%'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`
interface BtnProps {
    backgroundColor?: string;
    color?: string;
}
export const Btn = styled.button<BtnProps>`
    background-color: ${(props) => props.backgroundColor || '#1D87FA'};
    color: ${(props) => props.color || 'white'};
    height: 66px;
    border-radius: 8px;
    border-style: none;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`
