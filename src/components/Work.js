import React, { useState } from 'react';
import Project from './Project';
import projects from '../content/projects';
import companies from '../content/companies';

const initialDescription =
  'Hover over a company or project for more information.';

const Work = props => {
  const [description, setDescription] = useState(initialDescription);
  const [techUsed, setTechUsed] = useState([]);
  const [selectedWork, setSelectedWork] = useState(companies);

  const toggleSelectedWork = () => {
    if (selectedWork === companies) {
      setSelectedWork(projects);
    } else {
      setSelectedWork(companies);
    }
    setDescription(initialDescription);
    setTechUsed([]);
  };

  const onHover = project => {
    setDescription(project.description);
    setTechUsed(project.tech);
  };

  return (
    <article
      id="work"
      className={`${props.article === 'work' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">
        Work - {selectedWork === companies ? 'Previous Companies' : 'Projects'}
      </h2>
      <span className="image main">
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
          }}
        >
          {selectedWork.map(p => (
            <Project
              key={p.id}
              link={p.link}
              image={p.image}
              name={p.name}
              code={p.code}
              onHover={() => onHover(p)}
            />
          ))}
        </div>
      </span>
      <div style={{ paddingBottom: '2rem' }}>
        <button onClick={toggleSelectedWork}>
          {selectedWork === companies
            ? 'See Projects'
            : 'See Previous Compaines'}
        </button>
      </div>
      <p>{description}</p>
      {!!techUsed.length && <p>Technologies Used: {techUsed.join(', ')}</p>}
      {props.close}
    </article>
  );
};

export default Work;
