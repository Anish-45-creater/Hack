import React from "react";
import "./Schedule.css";

const Schedule = () => {
  const events = [
    { title: "Registration Starts", date: "14/02/2025", icon: "📅" },
    { title: "Registration Ends", date: "23/02/2025", icon: "⏳" },
    { title: "Hackathon Starts", date: "26/03/2025", icon: "🚀" },
    { title: "Hackathon Ends", date: "21/03/2025", icon: "🏁" },
    { title: "Work Demo Day", date: "22/03/2025", icon: "🎤" },
  ];

  return (
    <section id="schedule" className="section">
      <h1 id="heading">Event Schedule</h1>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="bubble">{event.icon}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
            </div>
            <div className="event-date">{event.date}</div>
          </div>
        ))}
        <div className="timeline-line">
          {events.map((_, index) => (
            <div className="timeline-circle" key={index}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
