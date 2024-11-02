import styled from 'styled-components';

const BdSearchContainer = styled.input`
    flex: 6; /* Flex 비율 설정 */
    border: 1px solid #1D87FA; /* 테두리 설정 */
    border-radius: 5px; /* 모서리 둥글게 설정 */
    font-size: 16px; /* 글자 크기 설정 */
    padding: 10px; /* 패딩 추가하여 내부 여백 설정 */
`;

const BdSearch = () => {
    return (
        <BdSearchContainer type="text" className="input" placeholder="검색어 입력" />
    );
};

export default BdSearch;