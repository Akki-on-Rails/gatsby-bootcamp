import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>My name ist Frank Gerngroß and I am a Frontend Developer. I used to work as a Graphic Designer for almost 15 years.
        Two years ago I discovered coding as a hobby. Some time later I decided to switch from the old job to a new one as a Web Developer.
        I joined a bootcamp and started developing web pages and web applications.</p>
      <p>My profound knowledge and experience as a Graphic Designer is a real advantage making communication with UX/UI and clients much easier.</p>
      <p>Want to get in contact with me? <Link to="../contact">Contact</Link></p>
    </Layout>
  )
}

export default AboutPage
