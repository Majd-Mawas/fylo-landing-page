import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={require(`./../images/logo.svg`).default} width='100px' alt="logo"/>

      <main className='main-footer'>
        <article className='location'>
      <img src={require(`./../images/icon-location.svg`).default} width='15px' alt="logo"/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Pariatur at expedita dolor quidem ea nisi eaque illo harum aperiam.
        </article>
        <article className='phoneNum'>
          <span>
      <img src={require(`./../images/icon-phone.svg`).default} width='15px' alt="logo"/>
      +1-543-123-4567
      </span>
        <span>
      <img src={require(`./../images/icon-email.svg`).default} width='15px' alt="logo"/>
      Example@fylo.com
      </span>
      </article>

        <article className='footer-tabs'>
          <span>About Us</span>
          <span>Jobs</span>
          <span>Press</span>
          <span>Blog</span>
          <span>Contact Us</span>
          <span>Terms</span>
          <span>Privecy</span>
        </article>

        <article className='Social-links'>

      <img src={require(`./../images/icons8-facebook.png`)} width='25px' alt="logo"/>
      <img src={require(`./../images/icons8-twitter.png`)} width='16px' alt="logo"/>
      <img src={require(`./../images/icons8-instagram.png`)} width='16px' alt="logo"/>
        </article>

      </main>
    </footer>
  )
}

export default Footer