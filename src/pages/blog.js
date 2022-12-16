import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import * as blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: {publishedDate: DESC}
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(data => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${data.node.slug}`}>
              <h2>{data.node.title}</h2>
              <p>{data.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
