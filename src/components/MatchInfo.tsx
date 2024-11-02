import styled from 'styled-components';
import BestplayerVote from './button/BestplayerVote';

const MatchInfoContainer = styled.div`
   .match-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  border: 3px solid #307DFA;
  border-radius: 5px;
  margin-top: 10px;
}
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.team span {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}
.team.red span {
  background-color: #ff6b6b;
}
.team.blue span {
  background-color: #6bc5ff;
}
.score {
  font-size: 24px;
  font-weight: bold;
}
`;

const MatchInfo = () => {
    return (
        <MatchInfoContainer>
            <div className="match-info">
                <div className="team red">
                    <span>레드팀</span>
                    <p>a팀</p>
                </div>
                <div className="score">3 : 1</div>
                <div className="team blue">
                    <span>블루팀</span>
                    <p>b팀</p>
                </div>
                <BestplayerVote />
            </div>
        </MatchInfoContainer>
    );
};

export default MatchInfo