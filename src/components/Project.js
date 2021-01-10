import React from 'react'

const Project = ({link, image}) => {
  return (
    <a href={link}><img src={image} alt="" style={{margin: "10px", width: "200px"}}/></a>
  )
}

export default Project