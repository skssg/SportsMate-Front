import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Record from '../components/Record';
import Footer from '../components/Footer';
import AppNav from '../components/AppNav';
import AppHeader from '../components/AppHeader';
import MyInfo from '../components/MyInfo';
import MyTeam from '../components/MyTeam';
import JoinTeamPeople from '../components/JoinTeamPeople';
import MyRecord from '../components/MyRecord';
import AppMyInfo from '../components/AppMyInfo';
import AppMyRecord from '../components/AppMyRecord';
import AppMyTeam from '../components/AppMyTeam';
import AppJoinTeamPeople from '../components/AppJoinTeamPeople';

const MyPageContainer = styled.div`
   body {
      margin: 0 auto;
      box-sizing: border-box;
   }

   .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
   }
  }
`;

const MyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // 모바일 기준, 원하는 기준에 맞게 조정 가능

  return (
    <MyPageContainer>
          {isMobile ? <AppHeader/> : <Header />}
          {isMobile ? <AppNav /> : <Nav />}
      <div className="container">
          {isMobile ? <AppMyInfo /> : <MyInfo /> }
          {isMobile ? <AppMyRecord /> : <MyRecord /> }
          {isMobile ? <AppMyTeam /> : <MyTeam /> }
          {isMobile ? <AppJoinTeamPeople /> : <JoinTeamPeople /> }
      </div>
          <Footer />
    </MyPageContainer>
  );
}

export default MyPage;