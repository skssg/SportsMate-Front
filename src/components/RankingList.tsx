import styled from 'styled-components';
import RankingListDetail from './li/RankingListDetail';

const RankingListContainer = styled.div`
   .ranking-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .ranking-list li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #ddd;
        padding: 10px 0;
    }

    .rank {
        font-size: 1.2em;
        width: 30px;
        text-align: center;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .team-name {
        flex-grow: 1;
        text-align: left;
        padding-left: 10px;
    }

    .points {
        font-weight: bold;
        color: #555;
    }

    .rankListDetailcss {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

const RankingList = () => {
    return (
        <RankingListContainer>
            <ul className="ranking-list">
                <RankingListDetail />
                <RankingListDetail />
                <RankingListDetail />
            </ul>
        </RankingListContainer>
    )
}

export default RankingList