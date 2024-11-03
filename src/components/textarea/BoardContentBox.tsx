import styled from 'styled-components';
import bannerImg from '../images/event-banner.png'

const BoardContentBoxContainer = styled.div`
    margin: 0 auto;
    text-align: center;
    width: 100%;

    textarea {
        width: 95%;
        height: 450px; /* 원하는 높이를 설정 */
        resize: none; /* 크기 조절 비활성화 */
        border: 1px solid #ccc; /* 테두리 스타일 설정 */
        border-radius: 4px; /* 모서리 둥글게 */
        padding: 10px; /* 안쪽 여백 설정 */
        outline: none; /* 포커스 시 아웃라인 없애기 */
    }
`;

const BoardContentBox = () => {
    return (
        <BoardContentBoxContainer>
            <textarea placeholder="내용을 입력하세요"></textarea>
        </BoardContentBoxContainer>
    );
};

export default BoardContentBox