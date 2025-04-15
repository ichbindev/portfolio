import React from 'react';
import ContactInfo from './ContactInfo';

function BusinessCard() {
  return (
    <article id="business-card" className="active">
      <h2 className="major">Contact Info</h2>
      <ContactInfo />
    </article>
  );
}

export default BusinessCard;
