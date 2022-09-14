import React from 'react'

var isValid = true; 
const Reviews = () => {
  const [email,setEmail]= React.useState("");

  function getEmail(event){
    setEmail(event.target.value)
    if(!pattern.test(email))
    isValid = false
    else
    isValid = true
  }

  var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

  function isEmailAddress() {  
    if(isValid)
      setEmail("")
  }

  React.useEffect(()=>{
    console.log(isValid);
    isValid = !!isValid
  },[email])


  return (
    <div className='review'>
      <main className='prod'>
        <img src={require(`./../images/illustration-stay-productive.png`)} alt="productive"/>
        <div>
          <h1>Stay productive, wherever you are</h1>
          <section>
            Never let location ba an issue when accessing your files,
            Fylo has you covered for all of your file storge needs.
          </section>
          <section>
          securely share files and folders with friends, 
          family and colleagues for live collaboration. No email attachments required.
          </section>
          <div className='link'>
            See how Fylo Works 
            <img src={require(`./../images/icon-arrow.svg`).default} width="20px" alt="productive"/>
          </div>
        </div>
      </main>
      <div className='grid-reviews'>

      <img className='quote' src={require(`./../images/bg-quotes.png`)} alt="productive" />

        <article>
          Fylo has improved our team productivity by on an order of magnitube. 
          Since making the switch our team has become a well-oiled collaboration machine.
          <div className='review-author'>
            <img src={require(`./../images/profile-1.jpg`)} width="25px" alt="productive" />
            <span>
                <h5>satish patel</h5>
                <h6>founder &amp; ceo, huddle</h6>
            </span>
          </div>
        </article>

        <article>
          Fylo has improved our team productivity by on an order of magnitube. 
          Since making the switch our team has become a well-oiled collaboration machine.
          <div className='review-author'>
            <img src={require(`./../images/profile-2.jpg`)} width="25px" alt="productive" />
            <span>
                <h5>satish patel</h5>
                <h6>founder &amp; ceo, huddle</h6>
            </span>
          </div>
        </article>

        <article>
          Fylo has improved our team productivity by on an order of magnitube. 
          Since making the switch our team has become a well-oiled collaboration machine.
          <div className='review-author'>
            <img src={require(`./../images/profile-3.jpg`)} width="25px" alt="productive" />
            <span>
                <h5>satish patel</h5>
                <h6>founder &amp; ceo, huddle</h6>
            </span>
          </div>
        </article>

      </div>
      <main className='early-access'>
        <div>
        <h1>Get early access today</h1>
        <span>
          It only takes a minute to sign up and our free starter tire is extremely generous.
          If you have any questions, our support team would be happy to help you.
          </span>
          <div className='form'>
            <input type='email' onChange={getEmail} value={email}/>
            <button className='submit-btn' onClick={isEmailAddress}>Get Started for free</button>
          </div>
          {!isValid?<div className='error'>Please enter a valid email address</div>:[]}
        </div>
      </main>
    </div>
  )
}

export default Reviews