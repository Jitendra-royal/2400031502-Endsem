import React, { useState } from "react";
import "./EventCalendar.css";

function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState("");

  const addEvent = () => {
    if (event) {
      setEvents([...events, { name: event, date: new Date().toLocaleDateString() }]);
      setEvent("");
    }
  };

  return (
    <div className="event-calendar">
      <h2>Event Calendar</h2>
      <input
        type="text"
        value={event}
        placeholder="Enter event name"
        onChange={(e) => setEvent(e.target.value)}
      />
      <button onClick={addEvent}>Add Event</button>

      <ul>
        {events.map((ev, index) => (
          <li key={index}>
            {ev.name} - {ev.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventCalendar;