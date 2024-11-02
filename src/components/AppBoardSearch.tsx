import styled from 'styled-components';
import bannerImg from '../images/event-banner.png'
import BdType from './select/BdType';
import BdSearch from './input/BdSearch';
import Button from './button/Button';


const AppBoardSearchContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; /* 요소 간 간격을 균등 분배 */
    padding: 0 15px; /* 컨테이너 양쪽 여백을 15px로 설정 */

    .bdSearch-btn {
        background-color: #007bff;
        flex: 1;
        margin-left: 15px; /* 버튼과 검색창 간 간격 설정 */
        margin-right: 30px;
    }
`;

const AppBoardSearch = () => {
    return (
        <AppBoardSearchContainer>
            <BdType />
            <BdSearch />
            <Button text="검색" className="bdSearch-btn" />
        </AppBoardSearchContainer>
    );
};

export default AppBoardSearch