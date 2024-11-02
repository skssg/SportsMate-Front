import styled from 'styled-components';
import PlusMinusButton from './button/PlusMinusButton';
import ClubInfo from './ClubInfo';

const AppMyTeamContainer = styled.div`
   width: 90%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

    .club-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 15px;
        margin-top: 10px;
    }
`;

const AppMyTeam = () => {
    return (
        <AppMyTeamContainer>
            <div className="my-club">
                <h3>소속 구단</h3>
                <div className="club-container">
                    <ClubInfo />
                </div>
            </div>
        </AppMyTeamContainer>
    );
};

export default AppMyTeam