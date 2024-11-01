import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import MatchingTime from './MatchingTime';
import MatchingTable from './MatchingTable';
import MatchingDate from './MatchingDate';
import matchingWaiting from '../images/matching-waiting.png'

const AppMatchingContainer = styled.div`
    .matching-img-box {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .matching-write {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        color: white;
        z-index: 1; /* 이미지 위로 텍스트가 나오도록 설정 */
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const AppMatching = () => {
    return (
        <AppMatchingContainer>
            <div className="matching-container">
                <div className="matching-img">
                    <div className="matching-img-box">
                        <div className="matching-write">현재 진행중인 매칭</div>
                        <img src={matchingWaiting} alt="매칭 이미지" />
                    </div>
                </div>
                <MatchingDate />
                <MatchingTime />
                <MatchingTable />
            </div>
        </AppMatchingContainer>
    );
};

export default AppMatching