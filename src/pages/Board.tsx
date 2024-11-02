import React from 'react';
import { useMediaQuery } from 'react-responsive';
import communityBanner from '../images/community_banner.png';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AppNav from '../components/AppNav';
import AppHeader from '../components/AppHeader';
import Button from '../components/button/Button';
import BoardSearch from '../components/BoardSearch';
import PaginationRounded from '../components/button/Pagenation';
import BoardTable from '../components/table/BoardTable';
import AppBoardSearch from '../components/AppBoardSearch';
import BoardUl from '../components/BoardUl';
import PlusMinusButton from '../components/button/PlusMinusButton';

const BoardContainer = styled.div`
   body {
      margin: 0 auto;
      box-sizing: border-box;
   }

   .banner {
      position: relative; /* 위치 설정 */
      background-color: #FFB980;
      display: flex;
      justify-content: center; /* 가로 중앙 정렬 */
      align-items: center; /* 세로 중앙 정렬 */
      margin-top: 50px;
      margin-bottom: 50px;
   }

   .banner img {
      height: auto; /* 비율 유지 */
   }

   .banner-text {
      position: absolute; /* 절대 위치 */
      color: white; /* 글자 색상 */
      font-size: 36px; /* 글자 크기 */
      text-shadow: 3px 3px 3px black; /* 검은색 테두리 효과 */
      font-weight: 800;
   }

   .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
   }

   .createBoard-btn {
        background-color: #007bff;
    }

    .createBoard-btn-container {
      display: flex; /* flexbox 사용 */
      justify-content: flex-end; /* 오른쪽 정렬 */
      width: 80%; /* 부모 컨테이너의 너비에 맞춤 */
      margin-top: 20px; /* 여백 추가 */
      margin-bottom: 100px;
      gap: 20px;

      @media (max-width: 767px) {
          width: 95%;
      }
   }

   .appBanner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      margin-left: 30px
   }

   .appBanner h3 {
      font-size: 28px;
   }
`;

const Board = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // 모바일 기준, 원하는 기준에 맞게 조정 가능

  return (
    <BoardContainer>
          {isMobile ? <AppHeader/> : <Header />}
          {isMobile ? <AppNav /> : <Nav />}
          {isMobile ?
            <div className="appBanner"><h3>커뮤니티</h3></div> 
            : 
            <div className="banner">
              <img src={communityBanner} alt=""/>
              <div className="banner-text">커뮤니티</div> {/* 텍스트 추가 */}
            </div>
          }
          {isMobile ? <AppBoardSearch /> : <BoardSearch />}
          {isMobile ? <BoardUl /> : <BoardTable />}
          {!isMobile && <PaginationRounded />}
          <div className="createBoard-btn-container">
              <Button text="글쓰기" className="createBoard-btn" />
              {isMobile && <PlusMinusButton />}
          </div>
          <Footer />
    </BoardContainer>
  );
}

export default Board;

/**
 */