import React from "react"
import Layout from '../components/layout';
import Timeline from '../components/timeline/timeline';

const Schedule = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title">Schedule</h1>
          <h2 className="subtitle">
            Need some info about what's happenin' and when? Here you go...
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Timeline />
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;