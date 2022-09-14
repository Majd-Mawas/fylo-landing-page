import React from 'react'

const Features = () => {
  return (
    <div className='Features'>
      <main className='feat-grid'>

        <section className='feat'>
          <img src={require(`./../images/icon-access-anywhere.svg`).default} alt="curvy"/>
          <span>Access your files, anywhere</span>
          <article>
            The ability to use a smartphone, tablet, or computer to access 
            your account means your files follow you everywhere.
            </article>
        </section>

        <section className='feat'>
          <img src={require(`./../images/icon-security.svg`).default} alt="curvy"/>
          <span>security you can trust</span>
          <article>
          2-factor authentication and user-controlled encyption are
          just a couple of the security features we allow to help secure your files.
            
            </article>
        </section>

        <section className='feat'>
          <img src={require(`./../images/icon-collaboration.svg`).default} alt="curvy"/>
          <span>Real-time collaboration</span>
          <article>
            securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </article>
        </section>

        <section className='feat'>
          <img src={require(`./../images/icon-any-file.svg`).default} alt="curvy"/>
          <span>Store any type of file</span>
          <article>
            Whether you're sharing holidays photos or work documents,
            Fylo has you coverd allowing for all file types to be securely stored and shared.
          </article>

        </section>

      </main>
    </div>
  )
}

export default Features