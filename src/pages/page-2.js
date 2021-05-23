import React from 'react';
import { sendEmail } from '../util/api';

import Layout from '../components/layout';

const SecondPage = () => {
  const onSubmit = evt => {
    evt.preventDefault();
    const form = {
      name: 'testName',
      email: 'test@e.mail',
      content: 'so long and thanks for all the fish'
    };
    sendEmail(form);
  };

  return (
  <Layout>
    <h1>Test</h1>
    {/* <button type='submit' onClick={onSubmit}>Test</button> */}
  </Layout>
)};

export default SecondPage;
