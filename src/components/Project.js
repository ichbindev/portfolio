import React from 'react';

const linkStyle = { paddingRight: '0 0.25rem' };

const Project = ({ link, image, name, code, onHover }) => {
  return (
    <div className="project" style={{ margin: '1rem auto' }} onMouseEnter={onHover} role="tooltip">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt={`link to ${name}`}
          style={{ width: '220px', height: '110px' }}
        />
      </a>
      <h4>
        { code ? <a href={code} style={linkStyle} className="icon fa-github" target="_blank" rel="noreferrer"></a>  : ''}{name}
      </h4>
    </div>
  );
};

export default Project;
