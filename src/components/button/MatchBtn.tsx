import styled from 'styled-components';

const MatchBtnContainer = styled.div`
    .match-btn {
        padding: 5px 10px;
        background-color: #3DABFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

`;

const MatchBtn = () => {
    return (
        <MatchBtnContainer>
            <td><button className="match-btn">매칭 신청</button></td>
        </MatchBtnContainer>
    );
};

export default MatchBtn