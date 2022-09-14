import React from 'react'

const Intero = () => {
  return (
    <div className='intero-section'>
      <div className='Intero-img'/>
      <div className='main-header'>All your files in one secure location, accessible anywhere.</div>
      <div className='second-header'>
        Fylo stores all your most important files in one secure location.
        Access them wherever you need, share and collaborate with friends family, and co-workers.
      </div>
      <button className='start-btn'>Get Started</button>
      <img src={require(`./../images/bg-curvy-desktop.svg`).default} alt="curvy"/>
    </div>
  )
}

export default Intero