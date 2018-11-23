import React from "react"
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Home = ({data}) => {
  // const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <section className="section is-medium">
        <div className="container">
          <h1 className="title">Welcome!</h1>
          <h2 className="subtitle">
            The weekend away is coming up and we are really exited about it!
          </h2>
          <p class="is-size-6">
            Here are some useful links for you...
          </p>
          <ul>
            <li>
            <Link to="/schedule">
            The schedule of the event
         </Link>
            </li>
            <li>
            <Link to="/equipment">
            What you should bring with you
         </Link>
            </li>
            <li>
            <Link to="/rooms">
            Room Assignments
         </Link>
            </li>
            <li>
            <Link to="/contact">
            If you need to contact us, try here
         </Link>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

// {
//   edges.map(edge => {
//     const { frontmatter } = edge.node;
//     return (
//       <div key={frontmatter.path}>
//         <Link to={frontmatter.path}>
//           {frontmatter.title}
//         </Link>
//       </div>
//     );
//   })
// }

// export const query = graphql`
//   query HomepageQuery {
//     allMarkdownRemark(
//       sort: {order: ASC, fields: [frontmatter___order]}
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//           }
//         }
//       }
//     }
//   }
// `;

export default Home;
