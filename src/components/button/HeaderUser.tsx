import styled from 'styled-components';
import UserProfile from '../../images/user_profile.png';

const HeaderUserContainer = styled.div`
    text-align: center;
   img {
        width: 50px;
    }

`;

const HeaderUser = () => {
    return (
        <HeaderUserContainer>
            <img src={UserProfile} alt=""/>
        </HeaderUserContainer>
    );
};

export default HeaderUser