import PropTypes from 'prop-types';
import React from 'react';
import avatar from '../images/avataar.svg';

const centerText = { margin: '0 auto' };

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <a href="https://www.github.com/ichbindev" style={{textDecoration: 'none'}}>
        <img src={avatar} 
         alt="animated headshot of myself, a white man with brown hair and a beard, wearing a blue hoodie" 
         style={{width: '100%', position: 'relative', bottom: '9px'}}
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
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro');
            }}
            style={centerText}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work');
            }}
            style={centerText}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about');
            }}
            style={centerText}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact');
            }}
            style={centerText}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
