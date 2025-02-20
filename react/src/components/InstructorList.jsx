import React, { useEffect, useState } from "react";
import api from "../services/api";

function InstructorList() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const data = await api.fetchInstructors();
        setInstructors(data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };
    fetchInstructors();
  }, []);

  return (
    <div>
      <h2>Instructor List</h2>
      <ul>
        {instructors.map((instructor) => (
          <li key={instructor._id}>{instructor.name} - {instructor.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default InstructorList;