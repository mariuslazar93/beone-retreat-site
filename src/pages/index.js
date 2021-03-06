import React from "react"
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Home = ({data}) => {
  return (
    <Layout>
      <section className="section is-medium">
        <div className="container">
          <h1 className="title">Welcome!</h1>
          <h2 className="subtitle">
            The weekend away is coming up and we are really excited about it!
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

export default Home;
