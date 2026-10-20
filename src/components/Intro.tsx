import headshot from '../images/headshot.jpg';
import type { ArticleProps } from '../types';

const Intro = ({ article, articleTimeout, close }: ArticleProps) => {
  return (
    <article
      id="intro"
      className={`${article === 'intro' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
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
      {close}
    </article>
  );
};

export default Intro;
