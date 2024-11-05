import React from 'react';
import {LogoDiv, LogoImg} from "../../styles/common/MainPageStyled";
import {useNavigate} from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <>
            <LogoDiv onClick={()=> navigate('/')}>
                <LogoImg/>
                SportsMate
            </LogoDiv>
        </>
    );
};

export default Logo;