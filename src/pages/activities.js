import React from 'react';
import './activities.css';

const Activity = ({ title, description, date, imageUrl }) => {
  return (
    <div className="activity-card">
      <div className="activity-img">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="activity-info">
        <h3>{title}</h3>
        <p className="activity-date">{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Activities = () => {
  const activities = [
    {
      title: 'Sahra Science',
      description: 'Sahra for everyone',
      date: '2024-11-07',
      imageUrl: '',
    },
    {
      title: 'Pi Day Celebration',
      description: 'Celebrating Pi with fun games and a pie contest.',
      date: '2024-03-14',
      imageUrl: 'https://www.example.com/pi_day.jpg',
    },
    {
      title: 'Math Olympiad',
      description: 'A competition to test your mathematical skills.',
      date: '2024-12-05',
      imageUrl: 'https://www.example.com/olympiad.jpg',
    },
  ];

  return (
    <div className="activities">
      <h1>Our Activities</h1>
      <div className="activities-list">
        {activities.map((activity, index) => (
          <Activity
            key={index}
            title={activity.title}
            description={activity.description}
            date={activity.date}
            imageUrl={activity.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;