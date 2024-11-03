import styled from 'styled-components';
import BoardContentBox from './textarea/BoardContentBox';

const AppBoardContentContainer = styled.div`
    text-align: center;
    width: 95%;

    hr {
        width: 100%;
    }
`;


const AppBoardContent = () => {
    return (
        <AppBoardContentContainer>
            <hr />
            <h3>내용</h3>
            <BoardContentBox />
        </AppBoardContentContainer>
    );
};

export default AppBoardContent