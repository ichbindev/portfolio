import React, { useState } from 'react'
import Project from './Project'
import projects from '../content/projects'

const Work = props => {
  const description = useState("Hover over a project for more information.")

  return (
    <article
    id="work"
    className={`${props.article === 'work' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">Work</h2>
      <span className="image main">
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-between"}}>
          {projects.map(p => 
            (<Project 
              link={p.link} 
              image={p.image} 
              description={p.description} 
              name={p.name} 
              code={p.code}/>))}
        </div>
      </span>
    <p>
      {description}
    </p>
    {props.close}
  </article>

  )
}

export default Work