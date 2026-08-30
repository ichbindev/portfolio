import { useEffect } from 'react';
import type { Ref } from 'react';
import Intro from './Intro';
import Work from './Work';
import About from './About';
import ContactCard from './ContactCard';
import type { ArticleName } from '../types';

interface MainProps {
  article: ArticleName;
  articleTimeout: boolean;
  timeout: boolean;
  onCloseArticle: () => void;
  /** React 19 passes `ref` as an ordinary prop to function components. */
  ref?: Ref<HTMLDivElement>;
}

const Main = ({
  article,
  articleTimeout,
  timeout,
  onCloseArticle,
  ref,
}: MainProps) => {
  /**
   * The class version defined `handleKeyDown` as a local const inside
   * componentDidMount but tried to remove `this.handleKeyDown` on unmount,
   * so the listener was never actually detached. The cleanup below closes
   * over the same reference it registered.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseArticle();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onCloseArticle]);

  /**
   * Kept as a div because the theme styles the bare `button` element
   * (_button.scss), which would override the .close glyph. The original had
   * role="button" with no key handler; Enter/Space now activate it.
   */
  const close = (
    <div
      className="close"
      role="button"
      tabIndex={0}
      aria-label="Close article"
      onClick={onCloseArticle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onCloseArticle();
        }
      }}
    />
  );

  const articleProps = { article, articleTimeout, close };

  return (
    <div
      ref={ref}
      id="main"
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <Intro {...articleProps} />
      <Work {...articleProps} />
      <About {...articleProps} />
      <ContactCard {...articleProps} />
    </div>
  );
};

export default Main;
