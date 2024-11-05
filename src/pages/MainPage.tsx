import React from 'react';
import '../styles/common/MainPage.css'
import {Wrap} from "../styles/common/MainPageStyled";
import {useResponsive} from "../components/common/MediaQuery";
import SearchBar from "../components/common/SearchBar";
import HeaderMobile from "../components/common/HeaderMobile";
import Header from "../components/common/Header";
import BottomNav from "../components/common/BottomNav";
import Nav from "../components/common/Nav";
const MainPage = () => {
    const {isPC, isMobile} = useResponsive();
    return (
        <Wrap>
            {isPC && <Header isPC={isPC}/>}
            {isPC && <Nav/>}
            {isMobile && <HeaderMobile/>}
            {isMobile && <SearchBar isPC={isPC}  width={'100%'}/>}
            {isMobile && <BottomNav/>}
        </Wrap>
    );
};

export default MainPage;