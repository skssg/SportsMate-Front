import styled from 'styled-components';

const BigThreeContainer = styled.div`
    .bigthree-container {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        margin-bottom: 15px;
    }

    .silver, .gold, .bronze {
        display: flex;
        justify-content: flex-start;
        padding-left: 10px;
        align-items: center;
        border-radius: 8px;
        width: 100px;
        color: white;
        position: relative;
    }

    .silver {
        background-color: #CCCCCC;
        height: 60px;
    }

    .gold {
        background-color: #F4CD67;
        height: 80px;
    }

    .bronze {
        background-color: #C07D52;
        height: 60px;
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