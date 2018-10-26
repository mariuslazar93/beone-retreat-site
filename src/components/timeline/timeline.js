import React from "react"
import timelineStyles from './timeline.scss';

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
  const data = [
    {
      type: 'header',
      title: 'Friday',
      classList: 'is-medium is-primary',
    },
    {
      type: 'item',
      classList: 'is-primary',
      heading: '17:30',
      content: 'Leaving from Church',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '20:30',
      content: 'Welcoming and Dinner',
    },
    {
      type: 'item',
      classList: 'is-primary',
      heading: '22:00',
      content: 'Overview and House Rules',
    },
    {
      type: 'item',
      classList: 'is-info',
      heading: '22:15',
      content: 'Chatting & Games',
    },
    {
      type: 'header',
      title: 'Saturday',
      classList: 'is-primary is-medium',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '8:30',
      content: 'Breakfast',
    },
    {
      type: 'item',
      classList: 'is-danger',
      heading: '9:30 - 11:00',
      content: 'Session 1 - <% SESSION_TITLE %>',
    },
    {
      type: 'item',
      classList: 'is-danger',
      heading: '11:30 - 12:30',
      content: 'Session 2 - <% SESSION_TITLE %>',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '13:00',
      content: 'Lunch',
    },
    {
      type: 'item',
      classList: 'is-info',
      heading: '14:00 - 16:00',
      content: 'Activities - Indoor/Outdoor/Quiet',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '17:30',
      content: 'Dinner',
    },
    {
      type: 'header',
      title: 'Sunday',
      classList: 'is-medium is-primary',
    },
  ];

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