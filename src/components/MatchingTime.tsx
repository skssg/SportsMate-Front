import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const MatchingTimeContainer = styled.div`
   .mt-time {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .mt-region {
        width: 81px;
        height: 30px;
        border-radius: 14px;
        background-color: white;
        text-align: center;
    }

    .mt-starttime {
        width: 81px;
        height: 30px;
        border-radius: 14px;
        background-color: white;
        text-align: center;
    }

    .mt-endtime {
        width: 81px;
        height: 30px;
        border-radius: 14px;
        background-color: white;
        text-align: center;
    }

`;

const MatchingTime = () => {
    return (
        <MatchingTimeContainer>
        <div className="mt-time">
            <select className="mt-region">
                <option value="전체">전체</option>
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="대구">대구</option>
                <option value="인천">인천</option>
                <option value="광주">광주</option>
                <option value="대전">대전</option>
                <option value="울산">울산</option>
                <option value="세종">세종</option>
            </select>
            <select className="mt-starttime">
                <option value="00 : 00">00 : 00</option>
                <option value="02 : 00">02 : 00</option>
                <option value="04 : 00">04 : 00</option>
                <option value="06 : 00">06 : 00</option>
                <option value="08 : 00">08 : 00</option>
                <option value="10 : 00">10 : 00</option>
                <option value="12 : 00">12 : 00</option>
                <option value="14 : 00">14 : 00</option>
            </select>
            ~
            <select className="mt-endtime">
                <option value="00 : 00">00 : 00</option>
                <option value="02 : 00">02 : 00</option>
                <option value="04 : 00">04 : 00</option>
                <option value="06 : 00">06 : 00</option>
                <option value="08 : 00">08 : 00</option>
                <option value="10 : 00">10 : 00</option>
                <option value="12 : 00">12 : 00</option>
                <option value="14 : 00">14 : 00</option>
            </select>
        </div>
        </MatchingTimeContainer>
    )
}

export default MatchingTime