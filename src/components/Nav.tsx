import styled from 'styled-components';
import NavPlace from './button/NavPlace';
import NavComu from './button/NavComu';
import NavTeam from './button/NavTeam';
import NavRank from './button/NavRank';

const NavContainer = styled.div`
   .nav-container {
        display: flex;
        justify-content: center;
        gap: 150px;
        margin-bottom: 15px;        
    }
`;

const Nav = () => {
    return (
        <NavContainer>
            <div className="nav-container">
                <NavPlace />
                <NavTeam />
                <NavComu />
                <NavRank />
            </div>
        </NavContainer>
    )
}

export default Nav