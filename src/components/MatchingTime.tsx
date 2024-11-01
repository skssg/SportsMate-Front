import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import MtEnd from './select/MtEnd';
import MtRegion from './select/MtRegion';
import MtStart from './select/MtStart';

const MatchingTimeContainer = styled.div`
   .mt-time {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }

`;

const MatchingTime = () => {
    return (
        <MatchingTimeContainer>
        <div className="mt-time">
            <MtRegion />
            <MtStart />
            ~
            <MtEnd />
        </div>
        </MatchingTimeContainer>
    )
}

export default MatchingTime