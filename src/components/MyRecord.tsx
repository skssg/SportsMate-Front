import styled from 'styled-components';
import PlusMinusButton from './button/PlusMinusButton';
import MatchInfo from './MatchInfo';

const MyRecordContainer = styled.div`
    width: 60%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    
   .record-container h3, .my-club h3 {
        margin: 0;
    }

    .stats-container {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
     }
            
     .stat-box {
        flex: 1;
        padding: 10px;
        border: 3px solid #307DFA;
        border-radius: 5px;
        text-align: center;
        margin: 0 5px;
    }

    .stat-box p {
        margin: 0;
        font-size: 14px;
        color: #333;
    }
`;


type StatBoxProps = {
    title: string;
    count: string;
};

const StatBox = ({ title, count }: StatBoxProps) => (
    <div className="stat-box">
        <p>{title}</p>
        <p>{count}</p>
    </div>
);

const MyRecord = () => {
    return (
        <MyRecordContainer>
            <div className="record-container">
                <h3>내 전적</h3>
                <div className="stats-container">
                    <StatBox title="총 경기 수" count="30번" />
                    <StatBox title="승리 횟수" count="17번" />
                </div>
                <MatchInfo />
                <PlusMinusButton />
            </div>
        </MyRecordContainer>
    );
};

export default MyRecord