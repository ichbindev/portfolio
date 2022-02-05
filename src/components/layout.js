import React from 'react';
import PropTypes from 'prop-types';
import SEO from './SEO';

import '../assets/scss/main.scss';

const Layout = ({ children, location }) => {
  let content,
    isHomePage = location && location.pathname === '/';

  if (isHomePage) {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        {children}
      </div>
    );
  }

  return (
    <>
      <SEO />
      {content}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
