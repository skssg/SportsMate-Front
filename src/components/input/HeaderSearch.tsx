import React, { useState } from 'react';
import styled from 'styled-components';

interface HeaderSearchProps {
    text?: string;
    placeholder?: string;
    width?: string; // width prop 추가
}

const HeaderSearchContainer = styled.div<{ width?: string }>` // width를 props로 받도록 수정
    .headerSearch input {
        width: ${({ width }) => width || '600px'}; // width 속성 사용
        border: 1px solid #1D87FA;
        border-radius: 8px;
        height: 30px;
        margin-top: 15px;
    }
`;

const HeaderSearch: React.FC<HeaderSearchProps> = ({ text, placeholder, width }) => {
    const [inputValue, setInputValue] = useState<string>(text || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <HeaderSearchContainer width={width}> {/* width를 HeaderSearchContainer에 전달 */}
            <div className="headerSearch">
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleChange}
                    placeholder={placeholder || "구장명을 입력하시오."} 
                />
            </div>
        </HeaderSearchContainer>
    );
};

export default HeaderSearch;