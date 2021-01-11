import React from 'react'
import Project from './Project'
import projects from '../content/projects'

const Work = props => {
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
      <div style={{display: "flex", flexDirection: "row"}}>
        {projects.map(p => 
          (<Project 
            link={p.link} 
            image={p.image} 
            description={p.description} 
            name={p.name} />))}
      </div>
    </span>
    <p>
      Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
      at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
      urna nisi, fringila lorem et vehicula lacinia quam. Integer
      sollicitudin mauris nec lorem luctus ultrices.
    </p>
    <p>
      Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
      libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
      Pellentesque condimentum sem. In efficitur ligula tate urna.
      Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
      Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
      libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
      tempus.
    </p>
    {props.close}
  </article>

  )
}

export default Work