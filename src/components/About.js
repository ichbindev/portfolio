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
        My first foray into programming was on my graphing calculator in the 7th grade. 
        Initially, I wrote some math tools to help apply some formulas in Algebra. Later 
        that year, I started making text-based games and transferring them over to 
        classmates' calculators, so they could play as well.
      </p>
      <p>
        Years later, I decided to get a formal education and received a Bachelor’s Degree in Computer Science from the University of Texas at Austin, a top 10 school in the US for Computer 
        Science. There, I was exposed to many different uses for programming, but I found the most enjoyment in building products, be it websites or native mobile applications.
      </p>
      <p>
        After graduating in 2014 I started working full-time at Vrbo, an online vacation rental marketplace that was acquired by Expedia. Though initially full stack, my role began to 
        focus on the backend (Java), where I built high-throughput APIs and owned the 
        auto-translation service that handled all machine translated text on the site. I also led DevJr, a group to help junior developers learn and grow, by hosting monthly speakers to talk about a wide range of topics focusing on tech and career. Through that I learned that I 
        loved mentoring junior developers, giving them insight on what they needed to focus on to 
        not only improve as an engineer but also to have a fulfilling career.
      </p>
      <p>
        After Vrbo, I decided to go back to full stack work and started at Cvent, an all-in-one 
        event management SaaS company. There I was able to focus on creating a tool that allowed 
        users to create and customize web sites through a drag-and-drop interface. I enjoyed working on the newer applications, which were written in React and TypeScript and deployed on 
        AWS. In addition to working with more modern front end tools, I also had more say in the 
        planning and direction of the product, where I felt I was able to have a positive impact and 
        produce better results for the company. This role also gave me the opportunity to directly 
        mentor younger developers on my team, which I still find to be the most rewarding part of my work.
      </p>
      <p>
        I then joined ZenBusiness as a Senior Software Engineer, where I was able to up both my 
        technical and leadership skills. I had the opportunity to focus on the front end for the 
        first time, where I felt I was able to even out my skills to match my backend experience. 
        Since it was a startup and I was now a Senior Engineer, I had much more impact on my team's 
        product and the company as a whole.
      </p>
      <p>
        At ZenBusiness I was promoted to Staff Engineer, where I got to lead a team of 6 engineers.
        In addition to coding, I enjoyed contributing to the product road map and working more frequently with other teams, as well as architecting new services and writing one-pagers to 
        document them, soliciting feedback and coming up with a solid plan before any development 
        started. After a reorganization of the company, I also acted as an Engineering Manager and 
        handled the day-to-day of people management for the engineers on my team.
      </p>
      <p>
        After ZenBusiness, I got the opportunity to work on an inspiring mission at 
        Trove Recommerce. I worked on custom warehouse management software geared towards resale, perfect for reselling used clothing goods with unique descriptions, 
        extending their life and keeping them out of the landfill. I worked the full stack there as 
        well, focusing on the software used by warehouse staff to pick and ship merchandise, as well 
        admin tools that handled shipping and transferring items between warehouses. Unfortunately, 
        Trove was forced to cut staff and did so on a last-in, first-out basis and I was their 
        newest developer.
      </p>
      <p>
        I am currently looking for a new opportunity, where I can use what I've learned over the 
        years to help improve an organization's product, processes and people.
      </p>
      {props.close}
    </article>
  );
};

export default About;
