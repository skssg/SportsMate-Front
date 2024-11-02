import styled from 'styled-components';
import HalfRating from './button/Start';

const ClubInfoContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    .club-info {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 15px;
        border: 3px solid #307DFA;
        border-radius: 5px;
        margin-top: 10px;
    }

    .club-head {
        margin-top: 10px;
    }

    .profile {
        margin-top: 10px;
    }

    .profile-image {
        width: 53px;
        height: 53px;
        border-radius: 50%; /* 원형으로 만들기 */
    }

    .profile-name {
        font-size: 14px;
        font-weight: bold;
        margin: 5px 0; /* 이름과 별 사이의 여백 */
        text-align: center;
    }

    .stars {
        display: flex;
        justify-content: center;
    }

    .star {
        width: 25px;
        height: 25px;
        margin: 0 2px; /* 별 사이의 간격 */
    }

    .profile-img-container {
        display: flex;
        justify-content: center;
    }

    .profile-circle {
        width: 53px;
        height: 53px;
        border-radius: 50%; /* 원형으로 만들기 */
        background-color: #007bff; /* 원하는 색상으로 변경 */
        display: inline-block; /* 프로필과 이름을 가로로 정렬 */
    }

    .club-body {
        padding: 5px 5px 5px 5px;
        border: 3px solid #307DFA;
        border-radius: 5px;
        margin-top: 10px;
        text-align: center;
    }

    .club-body p {
        margin: 0 2px;
        text-align: left;
    }

    .club-body h3 {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

const ClubInfo = () => {
    return (
        <ClubInfoContainer>
            <div className="club-info">
                <div className="soccer">
                    {/* 축구 구단 */}
                    <div className="club-head">
                        <p>축구</p>
                        <div className="profile">
                            <div className="profile-img-container">
                                <div className="profile-circle"></div>
                            </div>
                            <p className="profile-name">이름</p>
                            <HalfRating />
                        </div>
                    </div>
                    <div className="club-body">
                        <h3>구단 정보</h3>
                        <p>point : 1000</p>
                        <p>인원수 : 11 / 11</p>
                        <p>창설일 : 2024 / 01 / 01</p>
                        <p>구단장 : 김단장</p>
                    </div>
                    <hr></hr>
                </div>
                {/* 야구 구단 */}
                <div className="baseball">
                    <div className="club-head">
                        <p>야구</p>
                        <div className="profile">
                            <div className="profile-img-container">
                                <div className="profile-circle"></div>
                            </div>
                            <p className="profile-name">이름</p>
                            <HalfRating />
                        </div>
                    </div>
                    <div className="club-body">
                        <h3>구단 정보</h3>
                        <p>point : 1000</p>
                        <p>인원수 : 11 / 11</p>
                        <p>창설일 : 2024 / 01 / 01</p>
                        <p>구단장 : 김단장</p>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </ClubInfoContainer>
    );
};

export default ClubInfo
