import styled from 'styled-components';
import NavHome from './button/NavHome';
import NavComu from './button/NavComu';
import NavRank from './button/NavRank';
import NavTeam from './button/NavTeam';
import NavPlace from './button/NavPlace';

const NavContainer = styled.div`
   .nav-container {
        width: 100%;
        height: 60px;
        border-top: 1px solid lightgray;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0px;
        background-color: white;
        z-index: 9999;
    }
`;

const AppNav = () => {
    return (
        <NavContainer>
            <div className="nav-container">
                <NavPlace />
                <NavTeam />
                <NavHome />
                <NavComu />
                <NavRank />
            </div>
        </NavContainer>
    )
}

export default AppNav