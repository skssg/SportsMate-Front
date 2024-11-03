import styled from 'styled-components';
import HeaderSearch from './input/HeaderSearch';

const BoardTitleContainer = styled.div`
    text-align: center;
    width: 55%;
`;


const BoardTitle = () => {
    return (
        <BoardTitleContainer>
            <h3>제목</h3>
            <HeaderSearch text="" placeholder="제목을 입력하시오." width="100%" />
        </BoardTitleContainer>
    );
};

export default BoardTitle