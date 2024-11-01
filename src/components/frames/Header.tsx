import React from 'react'
import Logo from '../commons/Logo'
import LoginBtn from '../commons/LoginBtn'
import "../../styles/commons/header.css"

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className="bebas-neue-regular">
        <Logo />
      </div>
      <div className='btn-div'>
        <LoginBtn />
      </div>  
    </div>
  )
}

export default Header