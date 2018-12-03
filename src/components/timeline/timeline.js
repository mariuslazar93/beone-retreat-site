import React from "react"
import './timeline.scss';
import timelineData from './timeline-data.json';

const TimelineHeader = ({data}) => {
  const { title, classList } = data;

  return (
    <header className="timeline-header">
      <span className={`tag ${classList}`}>{title}</span>
    </header>
  );
}

const TimelineItem = ({data}) => {
  const { heading, content, classList} = data;

  return (
    <div className={`timeline-item ${classList}`}>
      <div className={`timeline-marker ${classList}`}></div>
      <div className="timeline-content">
        <p className="heading">{heading}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const data = timelineData;

  return (
    <div className="timeline is-centered">
      {
        data.map((elem, i) => {
          if (elem.type === 'header') {
            return <TimelineHeader data={elem} key={i}/>
          }

          return <TimelineItem data={elem} key={i}/>
        })
      }
    </div>
  );
};

export default Timeline;