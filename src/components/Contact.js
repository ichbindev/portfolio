import React, { useState } from 'react';
import { sendEmail } from '../util/api';

const Contact = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();
    const form = {
      name,
      email,
      content
    };
    sendEmail(form);
  };

  return (
    <article
      id="contact"
      className={`${props.article === 'contact' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Contact</h2>
      <form method="post" action="#">
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={evt => setName(evt.target.value)} />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={email} onChange={evt => setEmail(evt.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" value={content} onChange={evt => setContent(evt.target.value)} />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" onClick={onSubmit}/>
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
      </form>
      <p>Feel free to reach out at any of the sites below!</p>
      <ul className="icons">
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
      {props.close}
    </article>
  );
};

export default Contact;
