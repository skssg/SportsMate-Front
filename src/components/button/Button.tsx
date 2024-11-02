import styled from 'styled-components';

interface ButtonProps {
    text: string;
    className?: string;
}

// 스타일을 button 요소에 직접 적용
const StyledButton = styled.button`
    padding: 10px 15px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #4CAF50; /* 버튼 배경색 */
    cursor: pointer;
    
    &:hover {
        background-color: #45a049; /* 호버 시 배경색 */
    }
`;

const Button: React.FC<ButtonProps> = ({ text, className }) => {
    return <StyledButton className={className}>{text}</StyledButton>;
};

export default Button;