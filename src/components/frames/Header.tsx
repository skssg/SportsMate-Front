import React from 'react'
import Logo from '../commons/Logo'
import LoginBtn from '../commons/LoginBtn'
import "../../styles/commons/header.css"
import { LogoDiv } from '../../styles/commons/HeaderStyled'

const Header = () => {
  return (
    <LogoDiv>
      <div className="bebas-neue-regular">
        <Logo />
      </div>
      <div className='btn-div'>
        <LoginBtn />
      </div>  
    </LogoDiv>
  )
}

export default Header