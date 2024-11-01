import styled from 'styled-components';
import bannerImg from '../images/event-banner.png'

const BannerContainer = styled.div`
   .banner-img-box {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const Banner = () => {
    return (
        <BannerContainer>
            <div className="banner-img">
                <div className="banner-img-box">
                    <img src={bannerImg} alt="배너"/>
                </div>
            </div>
        </BannerContainer>
    );
};

export default Banner