import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import UserProfile from "../../images/user_profile.png";
import Logo from "./Logo";
import {HeaderDiv, UserIcon, UserImg} from "../../styles/common/MainPageStyled";

const HeaderMobile = () => {
    const navigate = useNavigate();
    return (
        // <div className='header-Mobile'>
        <HeaderDiv>
                <Logo />
                <UserIcon className={'UserIcon'}>
                    <UserImg onClick={()=> navigate('login.me')}/>
                </UserIcon>
        </HeaderDiv>
        // </div>
    );
};
export default HeaderMobile;

