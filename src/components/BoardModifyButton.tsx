import styled from 'styled-components';
import Button from './button/Button';

const BoardModifyButtonContainer = styled.div`
        display: flex; /* 버튼을 가로로 배치 */
        justify-content: space-between; /* 버튼 간의 간격을 동일하게 유지 */
        width: 65%; /* 버튼들이 부모의 너비를 가지게 함 */
        margin-top: 10px; /* 버튼 위쪽에 간격을 추가 */
        margin-left: 5px; /* 버튼 위쪽에 간격을 추가 */
        margin-right: 5px; /* 버튼 위쪽에 간격을 추가 */
        margin-bottom: 150px;
    

    .bdBack-btn,
    .bdCreate-btn {
        background-color: #007bff;
        margin: 0 5px; /* 버튼 간의 간격 추가 */
    }

    .bdDelete-btn {
        background-color: #ff1717;
        margin: 0 5px; /* 버튼 간의 간격 추가 */
    }
`;


const BoardModifyButton = () => {
    return (
        <BoardModifyButtonContainer>
            <Button text="돌아가기" className="bdBack-btn" />
            <Button text="게시글 삭제" className="bdDelete-btn" />
            <Button text="수정 완료" className="bdCreate-btn" />
        </BoardModifyButtonContainer>
    );
};

export default BoardModifyButton