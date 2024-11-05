import React from 'react';
import {HeaderDiv, LogoDiv, UserIcon, UserImg} from "../../styles/common/MainPageStyled";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

interface SearchBarProps {
    isPC: boolean;
}

const Header: React.FC<SearchBarProps> = ({ isPC }) => {
    const navigate = useNavigate();

    return (
        // <div className='header'>
        <HeaderDiv>
            {/*<Link to="/">*/}
                <Logo />
            {/*</Link>*/}
            <SearchBar isPC={isPC} />
            <UserIcon>
                <UserImg onClick={()=> navigate('login.me')} marginRight={'10px'}/>
            </UserIcon>
        </HeaderDiv>
        // </div>
    );
};

export default Header;





