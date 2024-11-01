import styled from 'styled-components';

const AppHeaderSearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .headerSearch input {
        width: 120%;
        border: 1px solid #1D87FA;
        border-radius: 8px;
        height: 30px;
    }
`;

const AppHeaderSearch = () => {
    return (
        <AppHeaderSearchContainer>
            <div className="headerSearch">
                    <input type="text" placeholder="구장명을 입력하시오."></input>
            </div>
        </AppHeaderSearchContainer>
    );
};

export default AppHeaderSearch