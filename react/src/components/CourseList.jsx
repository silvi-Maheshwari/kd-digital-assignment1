import React from "react";
import api from "../services/api";


function CourseList({ courses, setCourses }) {
  const handleDelete = async (id) => {
    await api.deleteCourse(id);
    setCourses((prevCourses) => prevCourses.filter((course) => course._id !== id));
  };

  return (
    <div className="course-list">
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id} className="course-item">
            <span>{course.name}</span>
            <button className="delete-btn" onClick={() => handleDelete(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
