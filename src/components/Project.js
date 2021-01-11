import React from 'react'

const Project = ({link, image, name}) => {
  return (
    <div>
      <a href={link}><img src={image} alt="" style={{margin: "1rem 0", width: "60%"}}/></a>
      <h4>{name}</h4>
    </div>
  )
}

export default Project