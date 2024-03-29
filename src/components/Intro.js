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
          alt="headshot of myself"
          style={{ width: '200px', margin: '0 auto' }}
        />
      </span>
      <p>
        Hi! My name is Chris, and I'm a web developer living in
        Austin, Texas. My hobbies include metalworking, rock climbing, and
        customizing mechanical keyboards. When I'm not doing the former, you can
        find me hanging out with my wife, Haley, and cats, Jackson and Johnny.
      </p>
      {props.close}
    </article>
  );
};

export default Intro;
