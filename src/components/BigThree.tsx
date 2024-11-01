import styled from 'styled-components';

const BigThreeContainer = styled.div`
   .bigthree-container {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        margin-bottom: 15px;
    }

    .silver {
        background-color: #CCCCCC;
        border-radius: 8px;
        width: 100px;
        height: 60px;
        position: relative;
        color: white;
    }

    .gold {
        background-color: #F4CD67;
        border-radius: 8px;
        width: 100px;
        height: 80px;
        position: relative;
        color: white;
    }

    .bronze {
        background-color: #C07D52;
        border-radius: 8px;
        width: 100px;
        height: 60px;
        position: relative;
        color: white;
    }

`;

const BigThree = () => {
    return (
        <BigThreeContainer >
            <div className="bigthree-container">
                <div className="second">
                    <div className="silver">2</div>
                </div>
                <div className="first">
                    <div className="gold">1</div>
                </div>
                <div className="third">
                    <div className="bronze">3</div>
                </div>
            </div>
        </BigThreeContainer>
    )
}

export default BigThree