import React, { useState } from "react";
import api from "../services/api";

function LectureScheduler() {
  const [lecture, setLecture] = useState({ instructorId: "", courseId: "", date: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.scheduleLecture(lecture);
      alert("Lecture Scheduled Successfully");
    } catch (error) {
      console.error("Error scheduling lecture:", error);
    }
  };

  return (
    <div>
      <h2>Schedule Lecture</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Instructor ID" onChange={(e) => setLecture({ ...lecture, instructorId: e.target.value })} />
        <input type="text" placeholder="Course ID" onChange={(e) => setLecture({ ...lecture, courseId: e.target.value })} />
        <input type="date" onChange={(e) => setLecture({ ...lecture, date: e.target.value })} />
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
}

export default LectureScheduler;