import React from "react"
import Layout from '../components/layout';
import Checklists from '../components/checklist/checklist';

const Equipment = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title">Equipment</h1>
          <h2 className="subtitle">
            You don't know what you need? Here are some ideas...
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Checklists />
        </div>
      </section>
    </Layout>
  );
};

export default Equipment;