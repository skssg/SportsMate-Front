import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/Logo.png'
import '../../styles/common/HeaderMobile.css';
import styled from "styled-components";
import UserProfile from "../../images/user_profile.png";
import {UserIcon, LogoDiv as LogoDivMobile} from "../../styles/common/MainPageStyled";

const HeaderMobile = () => {
    return (
        <div className='header-Mobile'>
            <Link to={"/"}>
                <LogoDivMobile>
                    <img src={Logo} alt="" className={"Logo-img"}/>
                    SportsMate
                </LogoDivMobile>
            </Link>
            <Link to={"login.me"}>
                <UserIcon className={'UserIcon'}>
                    <img src={UserProfile} alt="" className={'user-profile-mobile'}/>
                </UserIcon>
            </Link>
        </div>
    );
};
export default HeaderMobile;

const LogoDiv = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    font-family: "Bebas Neue", sans-serif;
    font-size: 17px;
    font-weight: 400;
    font-style: normal;
`
