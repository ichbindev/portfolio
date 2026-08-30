import { useLocation } from 'react-router';
import ContactInfo from './ContactInfo';
import type { ArticleProps } from '../types';

const ContactCard = ({ article, articleTimeout, close }: ArticleProps) => {
  /**
   * This used to be read from window.location at module scope, which froze to
   * the prerender value (false) and shipped that into the bundle. Reading it
   * from the router keeps it correct on both the server and the client.
   */
  const { pathname } = useLocation();
  const isStandaloneContactPage = pathname.includes('contact');

  return (
    <article
      id="contact-card"
      className={`${article === 'contact' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Contact</h2>
      <ContactInfo />
      {!isStandaloneContactPage && close}
    </article>
  );
};

export default ContactCard;
