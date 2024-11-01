import styled from 'styled-components';
import rankBtn from '../../images/rank-btn.png'

const NavRankContainer = styled.div`
    text-align: center;
   img {
        width: 50px;
    }
`;

const NavRank = () => {
    return (
        <NavRankContainer>
            <img src={rankBtn} alt=""/> <br/>
            <span>랭킹</span>
        </NavRankContainer>
    );
};

export default NavRank