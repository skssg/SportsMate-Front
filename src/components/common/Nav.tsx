import React from 'react';
import {CommunityBtnDiv, HomeBtnDiv, PlaceBtnDiv, RankBtnDiv, TeamBtnDiv} from "./BottomNav";
import styled from "styled-components";
import '../../styles/common/Nav.css'

const Nav = () => {
    return (
        <NavWrap className={'nav-wrap'}>
            <div className="nav-left">
                sports
            </div>
            <div className="nav-center">
                <PlaceBtnDiv/>
                <TeamBtnDiv/>
                <HomeBtnDiv/>
                <CommunityBtnDiv/>
                <RankBtnDiv/>
            </div>
            <div className="nav-right"> </div>
        </NavWrap>
    );
};

export default Nav;

export const NavWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`