import type { ReactNode } from 'react';
import { useLocation } from 'react-router';

import '../assets/scss/main.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Gatsby injected `location` as a prop into page components; react-router
  // exposes it through a hook instead.
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <>
      {isHomePage ? (
        <div>{children}</div>
      ) : (
        <div id="wrapper" className="page">
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
