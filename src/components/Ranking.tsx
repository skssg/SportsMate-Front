import styled from 'styled-components';
import BigThree from './BigThree';
import RankingList from './RankingList';

const RankingContainer = styled.div`
   .ranking-container {
        margin-left: 15px;
        padding-right: 15px;
        padding-left: 15px;

        @media (min-width: 768px) {
            border: 2px solid black;
        }
    }

    .ranking-container h3 {
        text-align: center;
    }
`;

const Ranking = () => {
    return (
        <RankingContainer>
            <div className="ranking-container">
                <h3>실시간 랭킹</h3>
                <BigThree />
                <RankingList />
            </div>
        </RankingContainer>
    )
}

export default Ranking