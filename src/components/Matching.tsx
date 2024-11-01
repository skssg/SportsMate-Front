import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import MatchingTime from './MatchingTime';
import MatchingTable from './MatchingTable';
import MatchingDate from './MatchingDate';

const MatchingContainer = styled.div`
   .matching-img-box {
        width: 100%;
        height: 100px;
        background-color: green;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 2);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Matching = () => {
    return (
        <MatchingContainer>
            <div className="matching-container">
                <div className="matching-img">
                    <div className="matching-img-box">현재 진행중인 매칭</div>
                </div>
                <MatchingDate />
                <MatchingTime />
                <MatchingTable />
            </div>
        </MatchingContainer>
    )
}

export default Matching