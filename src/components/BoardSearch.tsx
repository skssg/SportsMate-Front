import styled from 'styled-components';
import HalfRating from './button/Start';
import BdType from './select/BdType';
import BdSearch from './input/BdSearch';

const BoardSearchContainer = styled.div`
    max-width: 30%;
    margin: 20px auto; /* 상하 여백 및 가운데 정렬 */
    display: flex;
    justify-content: space-between;
`;


const BoardSearch = () => {
    return (
        <BoardSearchContainer>
            <BdType />
            <BdSearch />
        </BoardSearchContainer>
    );
};

export default BoardSearch
