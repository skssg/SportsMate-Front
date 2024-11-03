import React from 'react'
import Logo from '../commons/Logo'
import LoginBtn from '../commons/LoginBtn'
import { HeaderDiv, LoginDiv, LogoDiv } from '../../styles/commons/HeaderStyled'

const Header = () => {
  return (
    <HeaderDiv>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <LoginDiv>
        <LoginBtn />
      </LoginDiv>  
    </HeaderDiv>
  )
}

export default Header