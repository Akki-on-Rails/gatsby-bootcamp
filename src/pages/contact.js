import React from 'react';

import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact me!</h1>
      <ul>
        <li>GitHub: <a href='https://github.com/Akki-on-Rails' target="_blank" rel="noopener noreferrer">Akki-on-Rails</a></li>
        <li>LinkedIn: <a href='https://www.linkedin.com/in/frank-gerngross/' target="_blank" rel="noopener noreferrer">Frank Gerngroß</a></li>
      </ul>
    </Layout>
  )
  // rel="noopener noreferrer" is for phishing protection.
}

export default ContactPage
