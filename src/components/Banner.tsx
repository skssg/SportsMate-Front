import styled from 'styled-components';

const BannerContainer = styled.div`
   .banner-img-box {
        width: 100%;
        height: 200px;
        background-color: green;
    }
`;

const Banner = () => {
    return (
        <BannerContainer>
            <div className="banner-img">
                <div className="banner-img-box"></div>
            </div>
        </BannerContainer>
    );
};

export default Banner