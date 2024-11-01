import React from 'react';
import styled from "styled-components";
import placeBtn from '../../images/grount-btn.png'
import teamBtn from '../../images/team-btn.png'
import communityBtn from '../../images/community-btn.png'
import homeBtn from '../../images/home-btn.png'
import rankBtn from '../../images/rank-btn.png'
import '../../styles/common/bottomNav.css'

const BottomNav = () => {
    return (
        <BottomNavWrap className={'bt-nav-wrap'}>
            <PlaceBtnDiv/>
            <TeamBtnDiv/>
            <HomeBtnDiv/>
            <CommunityBtnDiv/>
            <RankBtnDiv/>
        </BottomNavWrap>
    );
};

export default BottomNav;

const BottomNavWrap = styled.div`
    width: 100%;
    //height: 40px;
    border-top: 1px solid lightgray;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;
    background-color: white;
`
export const PlaceBtnDiv = ()=>{
    return (
        <BtnWrap>
            <img src={placeBtn} alt=""/> <br/>
            <span>구장</span>
        </BtnWrap>
    )
}
export const TeamBtnDiv = ()=>{
    return (
        <BtnWrap>
            <img src={teamBtn} alt=""/> <br/>
            <span>구단</span>
        </BtnWrap>
    )
}
export const HomeBtnDiv = ()=>{
    return (
        <BtnWrap>
            <img src={homeBtn} alt=""/> <br/>
            <span>홈</span>
        </BtnWrap>
    )
}
export const CommunityBtnDiv = ()=>{
    return (
        <BtnWrap>
            <img src={communityBtn} alt=""/> <br/>
            <span>커뮤니티</span>
        </BtnWrap>
    )
}
export const RankBtnDiv = ()=>{
    return (
        <BtnWrap>
            <img src={rankBtn} alt=""/> <br/>
            <span>랭킹</span>
        </BtnWrap>
    )
}
const BtnWrap = styled.div`
    width: 20%;
    height: 65px;
`