const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blogPost.js');
  return graphql(`
    query {
      allMarkdownRemark(
        sort: {order: ASC, fields: [frontmatter___order]}
      ) {
        edges {
          node {
            frontmatter {
              title,
              path
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      const posts = result.data.allMarkdownRemark.edges;
      posts.forEach(({node}, index) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {
            pathSlug: node.frontmatter.path,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === posts.length - 1 ? null : posts[index + 1].node,
          },
        });
      });
    });
};