import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import Social from './Social';


const Contact = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const userId = 'user_8bsMZiIvuUMx8xjOsSNiU'
  const templateId = 'template_zvar50i';


  init(userId);

  const validateForm = () => {
    if (!email || !content || !name) {
      setError('Please fill out all of the fields before submitting your inquiry.');
      return false;
    }
    return true;
  };

  const reset = evt => {
    evt.preventDefault();
    setName('');
    setEmail('');
    setContent('');
    setError('');
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const form = {
      name,
      email,
      content
    };
    if (validateForm()) {
      emailjs.send('default_service', templateId, form);
      setSubmitted(submitted => !submitted);
      reset(evt);
    }
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
      { 
        submitted ? 
        (<div style={{margin: '30px 0'}}>
          <span>Thank you for reaching out! I will be in touch as soon as possible.</span>
        </div>) : 
        (<form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name*</label>
            <input type="text" name="name" id="name" value={name} onChange={evt => setName(evt.target.value)} />
          </div>
          <div className="field half">
            <label htmlFor="email">Email*</label>
            <input type="email" name="email" id="email" value={email} onChange={evt => setEmail(evt.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="message">Message* </label>
            <textarea name="message" id="message" rows="4" value={content} onChange={evt => setContent(evt.target.value)} />
          </div>
          <h4 style={{color: 'red'}}>{error}</h4>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" onClick={onSubmit}/>
            </li>
            <li>
              <input type="submit" value="Reset" onClick={reset}/>
            </li>
          </ul>
        </form>)
      }
      {props.close}
    </article>
  );
};

export default Contact;
