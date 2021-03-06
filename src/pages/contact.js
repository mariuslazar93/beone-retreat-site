import React from "react"
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title">Contact</h1>
          <h2 className="subtitle">
            If you need us, here are some persons of contact...
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p>John Doe - xxx</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;