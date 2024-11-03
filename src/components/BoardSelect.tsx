import styled from 'styled-components';
import BdType from './select/BdType';
import UploadFile from './input/UploadFile';

const BoardSelectContainer = styled.div`
    width: 55%; /* 전체의 75%로 설정 */
    margin-top: 5px;
`;

const BdTypeContainer = styled(BdType)`
    background-color: red;
`;



const BoardSelect = () => {
    return (
        <BoardSelectContainer>
            <BdType />
            <UploadFile />
        </BoardSelectContainer>
    );
};

export default BoardSelect