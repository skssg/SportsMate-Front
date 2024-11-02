import styled from 'styled-components';
import Logo from '../../images/Logo.png';

const HeaderLogoContainer = styled.div`
    text-align: center;
    img {
            width: 50px;
        }
    font-family: "Bebas Neue", sans-serif;
    font-size: 50px;

`;

const HeaderLogo = () => {
    return (
        <HeaderLogoContainer>
            <img src={Logo} alt="SportsMate Logo" className="Logo-img" />
            SportsMate
        </HeaderLogoContainer>
    );
};

export default HeaderLogo