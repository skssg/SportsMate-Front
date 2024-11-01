import React from 'react';
import {Wrap} from "../styles/common/MainPageStyled";
import Header from "../components/common/Header";
import HeaderMobile from "../components/common/HeaderMobile";
import BottomNav from "../components/common/BottomNav";
import {useResponsive} from "../components/common/MediaQuery";

const LoginPage = () => {
    const {isPC, isMobile} = useResponsive();
    return (
        <Wrap>
            {isPC && <Header isPC={isPC}/>}
            {isMobile && <HeaderMobile/>}
            {isMobile && <BottomNav/>}
            로그인 페이지
        </Wrap>
    );
};

export default LoginPage;