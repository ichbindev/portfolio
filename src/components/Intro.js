import React from 'react'
import pic from '../images/face.png'

const Intro = props => {
  return (
    <article
    id="intro"
    className={`${props.article === 'intro' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
    >
      <h2 className="major">Intro</h2>
      <span className="image main">
        <img src={pic} alt="headshot of myself" style={{width: '200px', margin: '0 auto'}} />
      </span>
      <p>
        Hi! My name is Chris, and I'm a web developer currently living in Austin, Texas. 
        My hobbies include metalworking, rock climbing, and customizing mechanical keyboards. 
        When I'm not doing the above, you can find me sitting on the couch and watching Netflix with my wife, Haley, and cat, Jackson.
      </p>
    {props.close}
  </article>

  )
}

export default Intro