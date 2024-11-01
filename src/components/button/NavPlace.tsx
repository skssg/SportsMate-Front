import styled from 'styled-components';
import placeBtn from '../../images/grount-btn.png'

const NavPlaceContainer = styled.div`
   img {
        width: 50px;
    }
        text-align: center;
`;

const NavPlace = () => {
    return (
        <NavPlaceContainer>
            <img src={placeBtn} alt=""/> <br/>
            <span>구장</span>
        </NavPlaceContainer>
    );
};

export default NavPlace