import React from "react"
import './timeline.scss';

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
      classList: 'is-large is-primary',
    },
    {
      type: 'item',
      classList: 'is-info',
      heading: '17:30',
      content: 'Leaving from Church',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '20:30',
      content: 'Welcoming and Rooms Assignment over dinner',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '21:30',
      content: 'Team 1 wash up',
    },
    {
      type: 'item',
      classList: 'is-info',
      heading: '22:00',
      content: 'Overview and House Rules',
    },
    {
      type: 'item',
      classList: 'is-primary',
      heading: '22:05',
      content: 'Devotion - George',
    },
    {
      type: 'item',
      classList: 'is-success',
      heading: '22:15',
      content: 'Chatting & Games',
    },
    {
      type: 'header',
      title: 'Saturday',
      classList: 'is-large is-primary',
    },
    {
      type: 'item',
      classList: 'is-primary',
      heading: '7:00',
      content: 'Prayer meeting [OPTIONAL]',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '8:00',
      content: 'Breakfast',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '9:00',
      content: 'Team 2 wash up',
    },
    {
      type: 'item',
      classList: 'is-danger',
      heading: '9:30 - 11:00',
      content: 'Session 1 - Vine and CJ',
    },
    {
      type: 'item',
      classList: 'is-danger',
      heading: '11:30 - 12:30',
      content: 'Session 2 - George',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '13:00',
      content: 'Lunch',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '13:45',
      content: 'Team 3 wash up',
    },
    {
      type: 'item',
      classList: 'is-success',
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
      type: 'item',
      classList: 'is-warning',
      heading: '18:30',
      content: 'Team 4 wash up',
    },
    {
      type: 'item',
      classList: 'is-danger',
      heading: '19:00 - 20:30',
      content: 'Session 3 - Nicole',
    },
    {
      type: 'item',
      classList: 'is-success',
      heading: '21:00',
      content: 'Bonfire',
    },
    {
      type: 'header',
      title: 'Sunday',
      classList: 'is-large is-primary',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '7:30',
      content: 'Breakfast',
    },
    {
      type: 'item',
      classList: 'is-warning',
      heading: '8:15',
      content: 'Team 5 wash up',
    },
    {
      type: 'item',
      classList: 'is-info',
      heading: '9:30',
      content: 'Luggage to the bus',
    },
    {
      type: 'item',
      classList: 'is-danger',
      heading: '10:00 - 11:30',
      content: 'Session 4 - Tola and Ayo',
    },
    {
      type: 'item',
      classList: 'is-info',
      heading: '12:00',
      content: 'Heading home and lunch on the bus',
    },
    {
      type: 'item',
      classList: 'is-success',
      heading: '15:00',
      content: 'Arrive back to BCC',
    }
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