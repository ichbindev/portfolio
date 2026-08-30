import { useState } from 'react';
import Project from './Project';
import projects from '../content/projects';
import companies from '../content/companies';
import type { ArticleProps, WorkItem } from '../types';

const initialDescription =
  'Hover over a company or project for more information.';

const Work = ({ article, articleTimeout, close }: ArticleProps) => {
  const [description, setDescription] = useState(initialDescription);
  const [techUsed, setTechUsed] = useState<string[]>([]);
  const [showingCompanies, setShowingCompanies] = useState(true);

  const selectedWork: WorkItem[] = showingCompanies ? companies : projects;

  const toggleSelectedWork = () => {
    setShowingCompanies((showing) => !showing);
    setDescription(initialDescription);
    setTechUsed([]);
  };

  const onHover = (item: WorkItem) => {
    setDescription(item.description);
    setTechUsed(item.tech);
  };

  return (
    <article
      id="work"
      className={`${article === 'work' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">
        Work - {showingCompanies ? 'Previous Companies' : 'Projects'}
      </h2>
      <span className="image main">
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
          }}
        >
          {selectedWork.map((item) => (
            <Project
              key={item.id}
              link={item.link}
              image={item.image}
              name={item.name}
              code={item.code}
              onHover={() => onHover(item)}
            />
          ))}
        </div>
      </span>
      <div style={{ paddingBottom: '2rem' }}>
        <button onClick={toggleSelectedWork}>
          {showingCompanies ? 'See Projects' : 'See Previous Companies'}
        </button>
      </div>
      <p>{description}</p>
      {!!techUsed.length && <p>Technologies Used: {techUsed.join(', ')}</p>}
      {close}
    </article>
  );
};

export default Work;
