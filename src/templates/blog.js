import React from 'react';
import { graphql } from 'gatsby';
// import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

export const query = graphql`
  query($slug : String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do YYYY")
      body {
        raw
        references{
          contentful_id
          title
          fixed{
            src
          }
        }
      }
    }
  }
`

// query($slug : String!) {
//   contentfulBlogPost(slug: {eq: $slug}) {
//     title
//     publishedDate(formatString: "MMM Do YYYY")
//     body {
//       raw
//       references{
//         contentful_id
//         title
//         fixed{
//             src
//              }
//       }
//     }
//   }
// }
// `

const Blog = (props) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b>{text}</b>
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1>{children}</h1>
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, title} = node.data.target
        return <GatsbyImage image={getImage(gatsbyImageData)} alt={title} />
      }
    }
  }

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.body, options)}
    </Layout>
  )
}

export default Blog
