import React from 'react';
import pic from '../images/face.png';

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
          src={pic}
          alt="headshot of myself, a white man with brown hair and a beard"
          style={{ width: '200px', margin: '0 auto' }}
        />
      </span>
      <p>
        Hi! My name is Chris, and I'm a web developer currently located in
        Austin, Texas. My hobbies include hiking, (indoor) rock climbing, and listening to podcasts about movies (that I've never seen). When I'm not doing any of those, you can
        find me hanging out with my wife, Haley, and cats, Jackson and Johnny.
      </p>
      {props.close}
    </article>
  );
};

export default Intro;
