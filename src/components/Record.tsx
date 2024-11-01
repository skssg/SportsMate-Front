import styled from 'styled-components';
import RecordList from './RecordList';

const RecordContainer = styled.div`
   .record-container {
        width: 400px;

        @media (min-width: 768px) {
            border: 2px solid black;
        }

        margin-bottom: 15px;
    }

    .record-select {
        text-align: center;
        padding-top: 15px;
        font-weight: bold;
    }

    .select-box {
        border: 2px solid #3DABFF;
        border-radius: 5px;
        width: 77px;
        height: 25px;
        text-align: center;
        margin-right: 5px;
        font-weight: 100;
    }
`;


const Record = () => {
    return (
        <RecordContainer>
            <div className="record-container">
                <div className="record-select">
                    <select className="select-box">
                        <option value="전체">전체</option>
                        <option value="서울">서울</option>
                        <option value="부산">부산</option>
                        <option value="대구">대구</option>
                        <option value="인천">인천</option>
                        <option value="광주">광주</option>
                        <option value="대전">대전</option>
                        <option value="울산">울산</option>
                        <option value="세종">세종</option>
                    </select>
                    지역 전적</div>
                <RecordList />
                <hr />
                <RecordList />
                <hr />
                <RecordList />
                <hr />
                <RecordList />
            </div>
        </RecordContainer>
    )
}

export default Record