import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Template = (props) => {
  const {frontmatter} = props.data.markdownRemark;
  const {html} = props.data.markdownRemark;

  return (
    <Layout>
      <section className="section is-medium">
        <div className="container">
          <h1 className="title">{frontmatter.title}</h1>
          <h2 className="subtitle">{frontmatter.subtitle}</h2>
          <div className="blogpost"
            dangerouslySetInnerHTML={{__html: html}}
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html,
      frontmatter {
        title,
        subtitle
      }
    }
  }
`;

export default Template;