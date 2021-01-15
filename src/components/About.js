import React from 'react'

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
          <p>
            I first started programming in 7th grade by writing text games on my handy TI-83 graphing calculator. Since then, I’ve been hooked on tinkering with code.  
          </p>
          <p>
            Several years later I graduated with a Bachelor’s in Computer Science from the University of Texas at Austin. In school, although my coding pursuits were mostly academic, I found the most enjoyment in building full stack applications, be it websites or native mobile applications.
          </p>
          <p>
            After graduating in 2014 I started working full-time at HomeAway (now Vrbo), an online vacation rental marketplace. My focus drifted more and more towards the backend (Java) where I built high-throughput APIs and owned an auto-translation service that was responsible for all machine translated text on the site. I also led DevJr, a group to help junior developers learn and grow, by finding monthly speakers to talk about a wide range of topics focusing on tech and career.
          </p>
          <p>
            Unfortunately, I ended up with a foot injury that was diagnosed incorrectly. It continued to worsen until I had to to take a leave from work and focus on my health. My issue was diagnosed and two surgeries and some physical therapy later and I was ready to start coding again. As I was recovering from surgery, I decided to take a full-stack coding bootcamp to get back into a routine and coding every day. This gave me some structured learning and experience with the latest technologies.
          </p>
          <p>
            When I was ready to begin full time work again I started at Cvent, where I work on a SaaS product that allows users to create and customize rich forms, manage the responses, and create events to be managed through our product. I’m really enjoying working on our newer applications, written in React and TypeScript and deployed on AWS. This role has also given me the opportunity to mentor other developers, which in my opinion is the most rewarding part of my job. 
          </p>
          {props.close}
        </article>
  )
}

export default About