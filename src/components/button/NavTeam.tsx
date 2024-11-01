import styled from 'styled-components';
import teamBtn from '../../images/team-btn.png'

const NavTeamContainer = styled.div`
    text-align: center;
   img {
        width: 50px;
    }
`;

const NavTeam = () => {
    return (
        <NavTeamContainer>
            <img src={teamBtn} alt=""/> <br/>
            <span>구단</span>
        </NavTeamContainer>
    );
};

export default NavTeam