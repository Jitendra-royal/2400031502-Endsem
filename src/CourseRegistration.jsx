import React, { useState } from "react";
import "./CourseRegistration.css";

function CourseRegistration() {
  const [course, setCourse] = useState("");
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const handleRegister = () => {
    if (course) {
      setRegisteredCourses([...registeredCourses, course]);
      setCourse("");
    }
  };

  return (
    <div className="course-registration">
      <h2>Course Registration</h2>
      <input
        type="text"
        value={course}
        placeholder="Enter course name"
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

      <ul>
        {registeredCourses.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseRegistration;