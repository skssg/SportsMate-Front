import styled from 'styled-components';

const HeaderSearchContainer = styled.div`
   .headerSearch input{
        width: 600px;
        border: 1px solid #1D87FA;
        border-radius: 8px;
        height: 30px;
        margin-top: 15px;
    }
`;

const HeaderSearch = () => {
    return (
        <HeaderSearchContainer>
            <div className="headerSearch">
                    <input type="text" placeholder="구장명을 입력하시오."></input>
            </div>
        </HeaderSearchContainer>
    );
};

export default HeaderSearch