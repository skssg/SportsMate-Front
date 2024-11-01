import styled from 'styled-components';

const MtRegionContainer = styled.div`
   .mt-region {
        width: 81px;
        height: 30px;
        border-radius: 14px;
        background-color: white;
        text-align: center;
    }
`;

const MtRegion= () => {
    return (
        <MtRegionContainer>
            <select className="mt-region">
                <option value="전체">전체</option>
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="대구">대구</option>
                <option value="인천">인천</option>
                <option value="광주">광주</option>
                <option value="대전">대전</option>
                <option value="울산">울산</option>
                <option value="세종">세종</option>
            </select>
        </MtRegionContainer>
    );
};

export default MtRegion