import React from 'react'
import pic03 from '../images/pic03.jpg'

const About = props => {
  return (
        <article
          id="about"
          className={`${props.article === 'about' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I'm a web developer currently living in Austin, TX. Although I started my career as a backend engineer, I fell in love with React and made the leap to full stack development. 
          </p>
          {props.close}
        </article>
  )
}

export default About