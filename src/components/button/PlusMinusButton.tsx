import styled from 'styled-components';

const PlusMinusButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    gap: 15px;
`;

const PlusMinusButton = () => {
    return (
        <PlusMinusButtonContainer>
            <button>➖</button>
            <button>➕</button>
        </PlusMinusButtonContainer>
    );
};

export default PlusMinusButton
