import styled from 'styled-components';
import homeBtn from '../../images/home-btn.png'

const NavHomeContainer = styled.div`
    text-align: center;
   img {
        width: 50px;
    }
`;

const NavHome = () => {
    return (
        <NavHomeContainer>
            <img src={homeBtn} alt=""/> <br/>
            <span>홈</span>
        </NavHomeContainer>
    );
};

export default NavHome