import React from 'react'
import GroundImg from '../../images/commons/Ground.png'
import HomeImg from '../../images/commons/Home.png'
import RankImg from '../../images/commons/Rank.png'
import TeamImg from '../../images/commons/Team.png'
import CommunityImg from '../../images/commons/Community.png'

const BottomMenu = () => {
  return (
    <div className='bot-menu'>
      <div className='bot-btn'>
        <div>
          <img src={GroundImg} alt="" />
        </div>
        <div>
          구장
        </div>
      </div>

      <div className='bot-btn'>
        <div>
          <img src={TeamImg} alt="" />
        </div>
        <div>
          구단메뉴
        </div>
      </div>

      <div className='bot-btn'>
        <div>
          <img src={HomeImg} alt="" />
        </div>
        <div>
          홈
        </div>
      </div>

      <div className='bot-btn'>
        <div>
          <img src={CommunityImg} alt="" />
        </div>
        <div>
          커뮤니티
        </div>
      </div>

      <div className='bot-btn'>
        <div>
          <img src={RankImg} alt="" />
        </div>
        <div>
          랭킹
        </div>
      </div>
    </div>
  )
}

export default BottomMenu