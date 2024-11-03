import styled from "styled-components";
import logoImg from "../../images/commons/Logo.png"
import loginImg from "../../images/commons/LoginBtn.png"

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
`

export const LogoDiv = styled.div`
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20pt;
    cursor: pointer;
    display: flex;
    align-items: center;

`

export const LogoImg = styled.img.attrs({
    src: logoImg,
})`
    width: 30px;
    height: 30px;
    padding: 10px 10px;
`

export const LoginDiv = styled.div`
    display: flex;
    align-items: center;
`

export const LoginImg = styled.img.attrs({
    src: loginImg,
})`
    width: 30px;
    height: 30px;
    padding: 10px 10px;
    cursor: pointer;
`