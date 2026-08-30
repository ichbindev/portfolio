import { useState } from 'react';
import type { FormEvent, MouseEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router';
import type { ArticleProps } from '../types';

/**
 * NOTE: this component is not currently rendered anywhere — Main renders
 * <ContactCard /> instead. It is kept working so the form can be re-enabled
 * without another migration.
 *
 * These identifiers are public by design for EmailJS (they ship in the client
 * bundle either way), but they now come from the environment so they are not
 * baked into source.
 */
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'default_service';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';

const Contact = ({ article, articleTimeout, close }: ArticleProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const { pathname } = useLocation();
  const isStandaloneContactPage = pathname.includes('contact');

  const validateForm = () => {
    if (!email || !content || !name) {
      setError(
        'Please fill out all of the fields before submitting your inquiry.'
      );
      return false;
    }
    return true;
  };

  const reset = () => {
    setName('');
    setEmail('');
    setContent('');
    setError('');
  };

  const onReset = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    reset();
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      // init() used to run on every render; it belongs with the send call.
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, content },
        { publicKey: PUBLIC_KEY }
      );
      setSubmitted(true);
      reset();
    } catch {
      setError('Something went wrong sending your message. Please try again.');
    }
  };

  return (
    <article
      id="contact"
      className={`${article === 'contact' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Contact</h2>
      {submitted ? (
        <div style={{ margin: '30px 0' }}>
          <span>
            Thank you for reaching out! I will be in touch as soon as possible.
          </span>
        </div>
      ) : (
        <form method="post" action="#" onSubmit={onSubmit}>
          <div className="field half first">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message* </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
          <h4 style={{ color: 'red' }}>{error}</h4>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" onClick={onReset} />
            </li>
          </ul>
        </form>
      )}
      {!isStandaloneContactPage && close}
    </article>
  );
};

export default Contact;
