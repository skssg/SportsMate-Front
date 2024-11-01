import styled from 'styled-components';
import RecordList from './RecordList';
import MtRegion from './select/MtRegion';

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
        display: flex;
        justify-content: center;
        gap: 8px; /* 요소들 사이의 간격 */
    }

    .mt-region {
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
                    <MtRegion/>
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