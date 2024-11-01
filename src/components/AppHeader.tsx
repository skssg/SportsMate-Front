import styled from 'styled-components';
import HeaderSearch from './input/HeaderSearch';
import HeaderUser from './button/HeaderUser';
import HeaderLogo from './button/HeaderLogo';
import AppHeaderSearch from './input/AppHeaderSearch';

const AppHeaderContainer = styled.div`
   .header {
        display: flex;
        justify-content: space-between;
        height: 90px;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 15px;
    }
`;

const AppHeader = () => {
    return (
        <AppHeaderContainer>
            <div className="header">
                <HeaderLogo />
                <HeaderUser />
            </div>
                <AppHeaderSearch />
        </AppHeaderContainer>
    )
}

export default AppHeader