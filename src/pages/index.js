import React from "react"
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <Header />
      {
        edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Layout;
