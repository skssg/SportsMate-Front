import styled from 'styled-components';
import BoardLi from './li/BoardLi';

const BoardUlContainer = styled.ul`
   list-style: none;
    padding: 0;
    margin-top: 20px;
    flex-grow: 1; /* 리스트가 가능한 공간을 채우도록 */
    overflow-y: auto; /* 리스트가 넘칠 경우 스크롤 */
`;

const BoardUl = () => {
    return (
        <BoardUlContainer>
           <BoardLi />
           <BoardLi /> 
           <BoardLi /> 
           <BoardLi /> 
           <BoardLi /> 
           <BoardLi />
        </BoardUlContainer>
    );
};

export default BoardUl