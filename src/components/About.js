import React from 'react';

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
        I first started programming in 7th grade by writing text games on my
        handy TI-83 graphing calculator. Since then, I’ve been hooked on
        tinkering with code.
      </p>
      <p>
        Years later I graduated with a Bachelor’s in Computer Science
        from the University of Texas at Austin. There, I was exposed to many different
        uses for programming, but I found the most enjoyment in building
        full stack applications, be it websites or native mobile applications.
      </p>
      <p>
        After graduating in 2014 I started working full-time at HomeAway (now
        Vrbo), an online vacation rental marketplace. Over time, my role drifted 
        more and more towards the backend (Java) where I built high-throughput 
        APIs and owned an auto-translation service that was responsible for all 
        machine translated text on the site. I also led DevJr, a group to help 
        junior developers learn and grow, by finding monthly speakers to talk about a
        wide range of topics focusing on tech and career.
      </p>
      <p>
        Unfortunately, I had to deal with a foot fracture that was diagnosed
        incorrectly. The pain continued to worsen until I had to to take a leave from
        work and focus on my health. The root cause was found and after two surgeries
        and physical therapy and I was ready to start coding again.
        As I was recovering from surgery, I decided to take a part in a full-stack coding
        bootcamp to get back into a routine and coding every day. This gave me
        some structured learning and experience with the latest web technologies.
      </p>
      <p>
        When I was ready to begin full time work again I started at Cvent, where
        I worked on a SaaS product that allows users to create and customize rich
        forms, manage the responses, and create events to be managed through our
        product. I really enjoyed working on the newer applications, written
        in React and TypeScript and deployed on AWS. This role also gave me
        the opportunity to mentor other developers, which I find to be the
        most rewarding part of my work.
      </p>
      <p>
        After a year, I joined ZenBusiness as a Senior Software Engineer, 
        where I am continuing to learn and refine my skills. Although 
        I am a full stack engineer, I have been working mainly on the frontend.
        This, coupled with my experience on the backend, allows
        me to feel comfortable in any part of the stack, whether it be SQL or CSS.
      </p>
      <p>
        I was promoted at ZenBusiness as a Staff Software Engineer, 
        where I got to do more of the above as well as lead a team of 6 engineers.
        In addition to coding, I enjoyed contributing to the product road map and 
        helping my team grow technically and professionally.
      </p>
      <p>
        After ZenBusiness, I got the opportunity to work on a wonderful mission at 
        Trove. I worked on custom warehouse software to sell unique items under one 
        SKU, perfect for reselling used clothing goods with unique descriptions, 
        extending their life and keepint them out of the landfill. I worked the full 
        stack there as well, focusing on the warehouse software used by staff to run 
        and manage warehouse inventory, as well as administrative functions like shipping, 
        transferring inventory and customer service.
      </p>
      <p>
        I am currently looking for a new opportunity, where I can use my technical skills 
        to enhance the product and my business skills to make sure we are focusing on the 
        right features in the right order to get the most of our teams' effort.
      </p>
      {props.close}
    </article>
  );
};

export default About;
