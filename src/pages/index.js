import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi, I'm Frank</h1>
      <h2>Frontend Developer and Graphic Designer</h2>
      <p><Link to='/contact'>Contact</Link></p>
      <p><Link to='/about'>About</Link></p>
      <p><Link to='/blog'>Blog</Link></p>
    </Layout>
  )
}

export default IndexPage
