import styled from 'styled-components';

const SelectTypeContainer = styled.div`
   .select-btn button {
        background-color: white;
        border-style: none;
        font-size: 17px;
        font-weight: bold;
        color: black;
        /* 기본 글씨 색상 */
        transition: color 0.3s;
        /* 색상 전환 애니메이션 */
    }
`;

const SelectType = () => {
    return (
        <SelectTypeContainer >
            <div className="select-btn">
                <button>축구</button>
                <button>풋살</button>
                <button>농구</button>
                <button>야구</button>
            </div>
        </SelectTypeContainer>
    )
}

export default SelectType