import React from 'react';
import Logo from '../../images/Logo.png';
import '../../styles/common/Header.css';
import UserProfile from '../../images/user_profile.png';
import { LogoDiv, UserIcon } from "../../styles/common/MainPageStyled";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";

interface SearchBarProps {
    isPC: boolean;
}

const Header: React.FC<SearchBarProps> = ({ isPC }) => {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <Link to="/">
                <LogoDiv>
                    <img src={Logo} alt="SportsMate Logo" className="Logo-img" />
                    SportsMate
                </LogoDiv>
            </Link>
            <SearchBar isPC={isPC} />
            <UserIcon>
                <img
                    src={UserProfile}
                    alt="User Profile"
                    className="user-profile"
                    onClick={() => navigate('/login.me')}
                    style={{ cursor: 'pointer' }} // Optional: to indicate it's clickable
                />
            </UserIcon>
        </div>
    );
};

export default Header;
