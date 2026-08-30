import { useRoutes } from 'react-router';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import PogoPage from './pages/PogoPage';
import FcPage from './pages/FcPage';
import NotFoundPage from './pages/NotFoundPage';

/** Replaces Gatsby's filesystem routing over src/pages. */
export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/contact', element: <HomePage article="contact" /> },
  { path: '/info', element: <InfoPage /> },
  { path: '/pogo', element: <PogoPage /> },
  { path: '/fc', element: <FcPage /> },
  { path: '*', element: <NotFoundPage /> },
];

const App = () => useRoutes(routes);

export default App;
