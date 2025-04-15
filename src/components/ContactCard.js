import React, { useState } from 'react';
import ContactInfo from './ContactInfo';

const isStandaloneContactPage = typeof window !== 'undefined' ? window.location.pathname.indexOf('contact') > -1 : false;

const ContactCard = props => {
  return (
    <article
      id="contact-card"
      className={`${props.article === 'contact' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Contact</h2>
      <ContactInfo/>
      {!isStandaloneContactPage && props.close}
    </article>
  );
};

export default ContactCard;
