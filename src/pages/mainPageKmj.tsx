import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import SelectType from '../components/SelectType';
import Record from '../components/Record';
import Ranking from '../components/Ranking';
import Matching from '../components/Matching';
import Footer from '../components/Footer';

const MainPageContainer = styled.div`
   body {
      margin: 0 auto;
      box-sizing: border-box;
   }

   .webflex {
      @media (min-width: 768px) {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 150px;
          margin-bottom: 25px;
      }
  }
`;

const MainPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // 모바일 기준, 원하는 기준에 맞게 조정 가능

  return (
    <MainPageContainer>
      <div className="container">
          <Header />
          <Nav />
          <Banner />
          <SelectType />
          <div className="webflex">
              <Record />
              <Ranking />
          </div>
          <Matching />
          <Footer />
      </div>
    </MainPageContainer>
  );
}

export default MainPage;