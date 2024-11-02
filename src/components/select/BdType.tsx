import styled from 'styled-components';

const BdTypeContainer = styled.select`
    flex: 1; /* flex 비율 설정 */
    margin-right: 10px;
    border: 1px solid #1D87FA;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
`;

const BdType= () => {
    return (
        <BdTypeContainer>
                <option value="">선택</option>
                <option value="1">축구</option>
                <option value="2">농구</option>
                <option value="3">풋볼</option>
                <option value="4">야구</option>
                <option value="5">후기</option>
                <option value="6">기타</option>
        </BdTypeContainer>
    );
};

export default BdType