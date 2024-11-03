import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AppNav from '../components/AppNav';
import AppHeader from '../components/AppHeader';
import BoardTitle from '../components/BoardTitle';
import BoardSelect from '../components/BoardSelect';
import BoardContent from '../components/BoardContent';
import BoardButton from '../components/BoardButton';
import AppBoardContent from '../components/AppBoardContent';


const BoardModifyContainer = styled.div`
   body {
      margin: 0 auto;
      box-sizing: border-box;
   }

   .BdCMWarp {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 20px;
   }
`;

const BoardModify = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // 모바일 기준, 원하는 기준에 맞게 조정 가능

  return (
    <BoardModifyContainer>
          {isMobile ? <AppHeader/> : <Header />}
          {isMobile ? <AppNav /> : <Nav />}
          <div className="BdCMWarp" >
            <BoardTitle />
            <BoardSelect />
            {isMobile ? <AppBoardContent /> : <BoardContent />}
            <BoardButton />
          </div>
          <Footer />
    </BoardModifyContainer>
  );
}

export default BoardModify;