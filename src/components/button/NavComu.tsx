import styled from 'styled-components';
import communityBtn from '../../images/community-btn.png'

const NavComuContainer = styled.div`
    text-align: center;
   img {
        width: 50px;
    }

`;

const NavComu = () => {
    return (
        <NavComuContainer>
            <img src={communityBtn} alt=""/> <br/>
            <span>커뮤니티</span>
        </NavComuContainer>
    );
};

export default NavComu