import styled from 'styled-components';
import MatchBtn from './button/MatchBtn';
import MatchTable from './tr/MatchTable';

const MatchingTableContainer = styled.div`
   .tableContainer {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 90px;

        @media (min-width: 768px) {
            width: 60%;
        }
    }

    table {
        width: 100%;
        border: none;
    }

    td {
        border-top: 1px solid black;
        padding: 5px;
    }

    td:first-child {
        font-size: 15px;
        padding: 0px;
    }

    td:nth-child(2),
    td:nth-child(3) {
        font-size: 12px;
    }

    td:nth-child(3) {
        font-size: 12px;
        text-align: center;
        display: flex;            /* 버튼을 중앙 정렬하기 위한 flex 설정 */
        justify-content: center;   /* 가로 가운데 정렬 */
        align-items: center;       /* 세로 가운데 정렬 */
    }

    .match-btn:hover {
        background-color: #0056b3;
    }
`;

const MatchingTable = () => {
    return (
        <MatchingTableContainer>
        <div className="tableContainer">
            <table>
                <MatchTable />
                <MatchTable />
                <MatchTable />
                <MatchTable />
                <MatchTable />
            </table>
        </div>
        </MatchingTableContainer>
    )
}

export default MatchingTable