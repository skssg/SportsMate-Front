import styled from 'styled-components';

const MatchingTableContainer = styled.div`
   .tableContainer {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 90px;

        @media (min-width: 768px) {
            width: 80%;
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

    .match-btn {
        padding: 5px 10px;
        background-color: #3DABFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
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
                <tr>
                    <td>18 : 00</td>
                    <td>서울 영등포 EA SPORTS FC(더에프필드) B구장</td>
                    <td><button className="match-btn">매칭 신청</button></td>
                </tr>
                <tr>
                    <td>18 : 00</td>
                    <td>서울 강동 송파 풋살장</td>
                    <td><button className="match-btn">매칭 신청</button></td>
                </tr>
                <tr>
                    <td>19 : 00</td>
                    <td>서울 영등포 EA SPORTS FC(더에프필드) B구장</td>
                    <td><button className="match-btn">매칭 신청</button></td>
                </tr>
                <tr>
                    <td>19 : 00</td>
                    <td>서울 강동 송파 풋살장</td>
                    <td><button className="match-btn">매칭 신청</button></td>
                </tr>
                <tr>
                    <td>20 : 00</td>
                    <td>서울 영등포 EA SPORTS FC(더에프필드) B구장</td>
                    <td><button className="match-btn">매칭 신청</button></td>
                </tr>
            </table>
        </div>
        </MatchingTableContainer>
    )
}

export default MatchingTable