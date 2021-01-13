import React from 'react'

const Project = ({link, image, name, code}) => {
  return (
    <div className="project" style={{margin: '1rem'}}>
      <a href={link}><img src={image} alt={`link to ${name}`} style={{width: "220px"}}/></a>
      <h4><a href={code} className="icon fa-github" /> {name}</h4>
      
    </div>
  )
}

export default Project