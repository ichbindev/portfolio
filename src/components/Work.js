import React, { useState } from 'react'
import Project from './Project'
import projects from '../content/projects'

const Work = props => {
  const [description, setDescription] = useState("Hover over a project for more information.")
  const [techUsed, setTextUsed] = useState([])

  const onHover = project => {
    setDescription(project.description)
    setTextUsed(project.tech)
  }

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
              name={p.name} 
              code={p.code}
              onHover={() => onHover(p)}/>))}
        </div>
      </span>
    <p>
      {description}
    </p>
    <p>
      Technologies Used: {techUsed.join(', ')}
    </p>
    {props.close}
  </article>

  )
}

export default Work