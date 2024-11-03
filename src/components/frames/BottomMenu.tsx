import React from 'react'
import GroundImg from '../../images/commons/Ground.png'
import HomeImg from '../../images/commons/Home.png'
import RankImg from '../../images/commons/Rank.png'
import TeamImg from '../../images/commons/Team.png'
import CommunityImg from '../../images/commons/Community.png'
import { BotBtn, BotImg, BotMenu } from '../../styles/commons/BotMenuStyled'

const BottomMenu = () => {
  return (
    <BotMenu>
      <BotBtn>
        <div>
          <BotImg src={GroundImg} />
        </div>
        <div>
          구장
        </div>
      </BotBtn>

      <BotBtn>
        <div>
          <BotImg src={TeamImg} />
        </div>
        <div>
          구단메뉴
        </div>
      </BotBtn>

      <BotBtn>
        <div>
          <BotImg src={HomeImg} />
        </div>
        <div>
          홈
        </div>
      </BotBtn>

      <BotBtn>
        <div>
          <BotImg src={CommunityImg} />
        </div>
        <div>
          커뮤니티
        </div>
      </BotBtn>

      <BotBtn>
        <div>
          <BotImg src={RankImg} />
        </div>
        <div>
          랭킹
        </div>
      </BotBtn>
    </BotMenu>
  )
}

export default BottomMenu