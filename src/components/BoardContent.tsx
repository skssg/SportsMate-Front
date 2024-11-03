import styled from 'styled-components';
import BoardContentBox from './textarea/BoardContentBox';

const BoardContentContainer = styled.div`
    text-align: center;
    width: 65%;
`;


const BoardContent = () => {
    return (
        <BoardContentContainer>
            <hr />
            <h3>내용</h3>
            <BoardContentBox />
        </BoardContentContainer>
    );
};

export default BoardContent