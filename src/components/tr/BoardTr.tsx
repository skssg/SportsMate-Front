import styled from 'styled-components';

const BoardTrContainer = styled.tr`

`;

const BoardTr = () => {
    return (
        <BoardTrContainer>
                <td>1</td>
                <td>게시글 제목이 길면 이렇게 표시됩니다.</td>
                <td>닉네임1</td>
                <td>2024-01-01</td>
                <td>100</td>
        </BoardTrContainer>
    );
};

export default BoardTr