import styled from "styled-components";
import LogoFile from '../../images/Logo.png';
import UserProfile from '../../images/user_profile.png';
interface UserImgProps {
    marginRight?: string;
}
interface SearchBar{
    width ?: string;
}
export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
`

export const LogoDiv = styled.div`
    width: 20%;
    min-width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    //font-family: "Bebas Neue", sans-serif;
    //font-weight: 400;
    //font-style: normal;
    font-family: "Bebas Neue", sans-serif;
    font-size: 24px;
    letter-spacing: 0.2em;
    color: black;
`
export const SearchBarWrap = styled.div<SearchBar>`
    //width: 60%;
    width: ${(props)=> props.width || '60%'};
    //max-width: 600px;
    min-width: 190px;
    height: 40px;
    margin: auto;
`
export const UserIcon = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeaderDiv = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
`
export const LogoImg = styled.img.attrs({
    src : LogoFile,
    alt : "",
})`
    width: 40px;
    height: 40px;
    margin-right: 10px
`
export const UserImg = styled.img.attrs<UserImgProps>({
    src : UserProfile,
    alt : "",
})`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-right: ${(props) => props.marginRight || '10px'};
`