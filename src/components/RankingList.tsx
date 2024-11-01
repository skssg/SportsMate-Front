import styled from 'styled-components';

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
`;

const RankingList = () => {
    return (
        <RankingListContainer>
            <ul className="ranking-list">
                <li>
                    <span className="rank">4</span>
                    <img src="team_logo1.png" alt="Team Logo" />
                    <span className="team-name">우리동네FC</span>
                    <span className="points">Point 1389</span>
                </li>
                <li>
                    <span className="rank">5</span>
                    <img src="team_logo2.png" alt="Team Logo" />
                    <span className="team-name">우리동네FC</span>
                    <span className="points">Point 1389</span>
                </li>
                <li>
                    <span className="rank">6</span>
                    <img src="team_logo3.png" alt="Team Logo" />
                    <span className="team-name">우리동네FC</span>
                    <span className="points">Point 1389</span>
                </li>
            </ul>
        </RankingListContainer>
    )
}

export default RankingList