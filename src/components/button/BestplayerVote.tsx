import User_Vote from '../../images/User_Vote.png'
import styled from 'styled-components';

const BestplayerVoteContainer = styled.div`
    text-align: center;
    img {
            width: 30px;
        }

`;

const BestplayerVote = () => {
    return (
        <BestplayerVoteContainer>
            <img src={User_Vote} alt="" />
        </BestplayerVoteContainer>
    );
};

export default BestplayerVote