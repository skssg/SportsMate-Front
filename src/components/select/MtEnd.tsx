import styled from 'styled-components';

const MtEndContainer = styled.div`
    .mt-endtime {
        width: 81px;
        height: 30px;
        border-radius: 14px;
        background-color: white;
        text-align: center;
    }
`;

const MtEnd= () => {
    return (
        <MtEndContainer>
            <select className="mt-endtime">
                <option value="00 : 00">00 : 00</option>
                <option value="02 : 00">02 : 00</option>
                <option value="04 : 00">04 : 00</option>
                <option value="06 : 00">06 : 00</option>
                <option value="08 : 00">08 : 00</option>
                <option value="10 : 00">10 : 00</option>
                <option value="12 : 00">12 : 00</option>
                <option value="14 : 00">14 : 00</option>
            </select>
        </MtEndContainer>
    );
};

export default MtEnd