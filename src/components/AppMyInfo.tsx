import styled from 'styled-components';
import Button from './button/Button';
import UserInfo from './UserInfo';

const AppMyInfoContainer = styled.div`
    width: 90%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center; /* 가운데 정렬 */
    justify-content: center; /* 세로 가운데 정렬 */

    img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 10px; // 이미지와 버튼 간의 간격을 줄 수 있습니다.
        background-color: gray;
    }

    .buttons {
        display: flex; /* 버튼을 가로로 배치 */
        justify-content: space-between; /* 버튼 간의 간격을 동일하게 유지 */
        width: 100%; /* 버튼들이 부모의 너비를 가지게 함 */
        margin-top: 10px; /* 버튼 위쪽에 간격을 추가 */
        margin-left: 5px; /* 버튼 위쪽에 간격을 추가 */
        margin-right: 5px; /* 버튼 위쪽에 간격을 추가 */
    }

    .modify-btn,
    .secession-btn {
        background-color: #007bff;
        flex: 1; /* 버튼들이 동일한 너비를 가지게 함 */
        margin: 0 5px; /* 버튼 간의 간격 추가 */
    }
`;

const AppMyInfo = () => {
    return (
        <AppMyInfoContainer>
            <img src="your-image-url.jpg" alt="User Profile" /> <br />
            <div className="buttons">
                <Button text="프로필 수정" className="modify-btn" />
                <Button text="회원 탈퇴" className="secession-btn" />
            </div>
        </AppMyInfoContainer>
    );
};

export default AppMyInfo;