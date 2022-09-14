import React from 'react'

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <img src={require(`./../images/logo.svg`).default}  alt="logo"/>
      <div className='tabs'>
        <span>Features</span>
        <span>Team</span>
        <span>Sign In</span>
      </div>
    </nav>
  )
}

export default Nav