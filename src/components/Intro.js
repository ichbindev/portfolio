import React from 'react';
import headshot from '../images/headshot.jpg';

const Intro = props => {
  return (
    <article
      id="intro"
      className={`${props.article === 'intro' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Intro</h2>
      <span className="image main">
        <img
          src={headshot}
          alt="headshot of myself, a white man with brown hair and a beard"
          style={{ width: '200px', margin: '0 auto' }}
        />
      </span>
      <p>
        Hi! My name is Chris, and I'm a Senior Software Engineer at Tanso,
        living in Munich, Germany. My hobbies include hiking (the Alps are hard to beat), (indoor) rock climbing, and listening to podcasts about movies (that I've never seen). When I'm not doing any of those, you can
        find me working on my German, or hanging out with my wife, Haley, and cats, Jackson and Johnny.
      </p>
      {props.close}
    </article>
  );
};

export default Intro;
