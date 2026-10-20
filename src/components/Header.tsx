import avatar from '../images/avataar.svg';
import type { ArticleName } from '../types';

const centerText = { margin: '0 auto' };

const NAV_ITEMS: { id: ArticleName; label: string }[] = [
  { id: 'intro', label: 'Intro' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

interface HeaderProps {
  onOpenArticle: (article: ArticleName) => void;
  timeout: boolean;
}

const Header = ({ onOpenArticle, timeout }: HeaderProps) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <a
        href="https://www.github.com/ichbindev"
        style={{ textDecoration: 'none' }}
      >
        <img
          src={avatar}
          alt="animated headshot of myself, a white man with brown hair and a beard, wearing a blue hoodie"
          style={{ width: '100%', position: 'relative', bottom: '9px' }}
        />
      </a>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Chris Mlinac</h1>
        <p style={{ width: '50%', margin: '0 auto' }}>Full Stack Developer</p>
      </div>
    </div>
    <nav>
      <ul>
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <button onClick={() => onOpenArticle(id)} style={centerText}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
