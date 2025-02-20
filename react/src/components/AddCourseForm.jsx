import React, { useState } from "react";
import api from "../services/api";
// import "./AddCourseForm.css"; // Stylish CSS

function AddCourseForm({ onCourseAdded }) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCourse = { name, level, description };
    await api.addCourse(newCourse);

    onCourseAdded(newCourse);

    setName("");
    setLevel("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <h2>📚 Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Course Name"
            className="form-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            placeholder="Course Level (Beginner, Advanced, etc.)"
            className="form-input"
          />
        </div>
        <div className="input-group">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Course Description"
            className="form-textarea"
          />
        </div>
        <button type="submit" className="submit-btn">🚀 Add Course</button>
      </form>
    </div>
  );
}

export default AddCourseForm;
