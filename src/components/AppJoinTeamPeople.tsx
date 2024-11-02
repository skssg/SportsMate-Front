import styled from 'styled-components';
import Button from './button/Button';

const AppJoinTeamPeopleContainer = styled.div`
             width: 85%;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 100px;
        
        .title {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .box {
            border: 2px solid #007bff;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 8px;
        }
        .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .profile img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #e0e0e0;
        }
        .profile-text {
            margin-top: 5px;
            font-weight: bold;
        }
        .team-name {
            border: 2px solid #007bff;
            border-radius: 8px;
            padding: 20px;
            width: 90px; /* 이미지 크기에 맞게 너비 설정 */
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .buttons {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .buttons button {
            padding: 10px 15px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            color: white;
            cursor: pointer;
        }
        .view-btn {
            background-color: #007bff;
        }
        .approve-btn {
            background-color: #007bff;
        }
        .reject-btn {
            background-color: #dc3545;
        }
        .reject-btn: hover {
            background-color: #f50017;
        }
`;

const AppJoinTeamPeople = () => {
    return (
        <AppJoinTeamPeopleContainer>
            <div className="title">구단 입단 신청 목록</div>
            <div className="box">
                <div className="profile">
                    <img src="" alt=""/> <br/>   
                    <div className="profile-text">신청자 아이디</div>
                </div>
                <div className="profile team-name">
                    <img src="" alt=""/> <br/>
                    <div className="profile-text">구단 명</div>
                </div>
                <div className="buttons">
                    <Button text="입단자 정보 보기" className="view-btn" />
                    <Button text="승인" className="approve-btn" />
                    <Button text="거절" className="reject-btn" />
                </div>
            </div>
        </AppJoinTeamPeopleContainer>
    );
};

export default AppJoinTeamPeople