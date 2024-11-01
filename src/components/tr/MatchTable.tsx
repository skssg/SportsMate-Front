import styled from 'styled-components';
import MatchBtn from '../button/MatchBtn';

const MatchTableContainer = styled.tr`

`;

const MatchTable = () => {
    return (
        <MatchTableContainer>
                <td>18 : 00</td>
                <td>서울 영등포 EA SPORTS FC(더에프필드) B구장</td>
                <td><MatchBtn /></td>
        </MatchTableContainer>
    );
};

export default MatchTable