import styled from 'styled-components';

const HeaderContainer = styled.div`
   .header {
        display: flex;
        justify-content: space-between;
        height: 90px;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 15px;
    }

    .headerSearch input{
        width: 100%;
        border: 1px solid #1D87FA;
        border-radius: 8px;
        height: 30px;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className="header">
                <div className="logo">SPORTMATE</div>
                <div className="headerSearch">
                    <input type="text" placeholder="구장명을 입력하시오."></input>
                </div>
                <div className="user">user</div>
            </div>
        </HeaderContainer>
    )
}

export default Header