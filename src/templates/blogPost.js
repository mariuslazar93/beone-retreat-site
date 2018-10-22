import React from 'react';
import { graphql, Link } from 'gatsby';

const Template = (props) => {
  const {frontmatter} = props.data.markdownRemark;
  const {html} = props.data.markdownRemark;
  console.log(props);
  const {next, prev} = props.pageContext;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div className='blogpost'
        dangerouslySetInnerHTML={{__html: html}}
      />
      {
        prev &&
          <Link to={prev.frontmatter.path}>
            {prev.frontmatter.title}
          </Link>
      }
      {
        next &&
          <Link to={next.frontmatter.path}>
            {next.frontmatter.title}
          </Link>
      }
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html,
      frontmatter {
        title
      }
    }
  }
`;

export default Template;