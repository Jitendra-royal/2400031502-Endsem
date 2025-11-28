import React from "react";
import Navbar from "./Navbar";
import CourseRegistration from "./CourseRegistration";
import EventCalendar from "./EventCalendar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>University Portal</h1>
      <CourseRegistration />
      <EventCalendar />
    </div>
  );
}

export default App;