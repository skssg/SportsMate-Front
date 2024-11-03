import React from 'react'
import { Carousel } from 'antd';
import { EvBannerDiv } from '../styles/commons/EvBannerStyled';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '200px',
  color: '#fff',
  lineHeight: '200px',
  textAlign: 'center',
  background: '#364d79',
};

const EvBanner = () => {
  return (
    <EvBannerDiv>
        <Carousel arrows infinite={false}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    </EvBannerDiv>
  )
}

export default EvBanner