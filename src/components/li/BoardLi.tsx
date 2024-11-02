import styled from 'styled-components';


const BoardLiContainer = styled.li`
    background: #fff;
    border: 1px solid #ccc;
    border-left: none; /* 왼쪽 테두리 제거 */
    border-right: none; /* 오른쪽 테두리 제거 */
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* 첫 번째 li의 위 테두리만 굵게 */
    &:first-child {
        border-top: 3px solid #333;
    }

    /* 마지막 li의 아래 테두리만 굵게 */
    &:last-child {
        border-bottom: 3px solid #333;
    }

    .post-number {
        width: 50px;
        text-align: center;
        font-size: 1.5em; /* 글꼴 크기 확대 */
        font-weight: bold; /* 글꼴 굵게 */
    }

    .post-title {
        flex-grow: 1;
        padding-left: 10px;
    }

    .post-meta {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`;

const BoardLi = () => {
    return (
        <BoardLiContainer>
            <div className="post-number">1</div>
            <div className="post-title">게시물 제목 1</div>
            <div className="post-meta">
                <span>조회수: 100</span>
                <span>종류: 종류 1</span>
                <span>게시일: 2024-11-02</span>
            </div>
        </BoardLiContainer>
    );
};

export default BoardLi