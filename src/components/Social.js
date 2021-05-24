import React from 'react';

const Social = ({linkedIn = true, twitter = true, github = true}) => {
  

  return (
    <ul className="icons" style={{margin: 0}}>
        <li>
          <a href="https://twitter.com/ichbindev" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/cmlinac"
            className="icon fa-linkedin"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/ichbindev" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
  );
};

export default Social;