import { useCallback, useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Social from '../components/Social';
import type { ArticleName } from '../types';

/** Delays (ms) that stage the panel's open/close CSS transitions. */
const LOADING_DELAY = 100;
const TIMEOUT_DELAY = 250;
const ARTICLE_TIMEOUT_DELAY = 275;

interface HomePageProps {
  /** Opens straight to this article, used by the /contact route. */
  article?: ArticleName;
}

const HomePage = ({ article: initialArticle = '' }: HomePageProps) => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setTimeoutFlag] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState<ArticleName>(initialArticle);
  const [loading, setLoading] = useState('is-loading');

  const wrapperRef = useRef<HTMLDivElement>(null);
  /**
   * The staged open/close transitions used to leak: the class component fired
   * nested setTimeouts that nothing ever cleared. Track them so unmount can.
   */
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const schedule = useCallback((fn: () => void, delay: number) => {
    timers.current.push(setTimeout(fn, delay));
  }, []);

  useEffect(() => {
    const timersOnMount = timers.current;
    return () => {
      timersOnMount.forEach(clearTimeout);
      timersOnMount.length = 0;
    };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setLoading(''), LOADING_DELAY);
    return () => clearTimeout(id);
  }, []);

  /**
   * The class version toggled each flag off its own `this.state` inside a
   * setTimeout (`{ timeout: !this.state.timeout }`), which reads stale state
   * under React 18+ batching. Each transition drives the flags to a known
   * value instead, so the toggles cannot desynchronize.
   */
  const handleOpenArticle = useCallback(
    (next: ArticleName) => {
      setIsArticleVisible(true);
      setArticle(next);
      schedule(() => setTimeoutFlag(true), TIMEOUT_DELAY);
      schedule(() => setArticleTimeout(true), ARTICLE_TIMEOUT_DELAY);
    },
    [schedule]
  );

  const handleCloseArticle = useCallback(() => {
    setArticleTimeout(false);
    schedule(() => setTimeoutFlag(false), TIMEOUT_DELAY);
    schedule(() => {
      setIsArticleVisible(false);
      setArticle('');
    }, ARTICLE_TIMEOUT_DELAY);
  }, [schedule]);

  // Open the article requested by the route (e.g. /contact) on first render.
  useEffect(() => {
    if (initialArticle) {
      handleOpenArticle(initialArticle);
    }
  }, [initialArticle, handleOpenArticle]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper || wrapper.contains(event.target as Node)) return;
      if (isArticleVisible) {
        handleCloseArticle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isArticleVisible, handleCloseArticle]);

  return (
    <Layout>
      <div
        className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}
      >
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
          <Main
            ref={wrapperRef}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
          />
          <Social />
          <Footer timeout={timeout} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  );
};

export default HomePage;
