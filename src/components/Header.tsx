import styled from 'styled-components';
import HeaderSearch from './input/HeaderSearch';
import HeaderUser from './button/HeaderUser';
import HeaderLogo from './button/HeaderLogo';

const HeaderContainer = styled.div`
   .header {
        display: flex;
        justify-content: space-between;
        height: 90px;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 15px;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className="header">
                <HeaderLogo />
                <HeaderSearch />
                <HeaderUser />
            </div>
        </HeaderContainer>
    )
}

export default Header