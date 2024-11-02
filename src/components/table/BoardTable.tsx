import styled from 'styled-components';
import BoardTr from '../tr/BoardTr';

const BoardTableContainer = styled.div`
   width: 55%;
   margin: 20px auto;

     table {
        width: 100%;
        border-collapse: collapse; /* 테두리 겹침 방지 */
        margin: 20px 0;
        border: 2px solid #ddd; /* 테이블 외부 테두리 */
        border-spacing: 0; /* 기본 테두리 간격 제거 */
    }

    th, td {
        padding: 12px; /* 셀 내부 여백 */
        text-align: center; /* 가운데 정렬 */
    }

    /* 가로선 설정 */
    tr {
        border-bottom: 1px solid #ddd; /* 각 행의 아래쪽에만 선 추가 */
    }

    th {
        background-color: #f2f2f2;
    } 
`;

const BoardTable = () => {
    return (
        <BoardTableContainer>
            <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th style={{width: '50%'}}>제목</th>
                    <th>닉네임</th>
                    <th>게시일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                <BoardTr />
                <BoardTr />
                <BoardTr />
                <BoardTr />
                <BoardTr />
            </tbody>
        </table>
        </BoardTableContainer>
    );
};

export default BoardTable