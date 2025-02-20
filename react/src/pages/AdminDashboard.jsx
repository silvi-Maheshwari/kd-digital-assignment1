import React, { useState, useEffect } from "react";
import CourseList from "../components/CourseList";
// import InstructorList from "../components/InstructorList";
import AddCourseForm from "../components/AddCourseForm";
// import LectureScheduler from "../components/LectureScheduler";
import api from "../services/api";
import LectureScheduler from "../components/LectureScheduler";
import InstructorList from "../components/InstructorList";

function AdminDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.fetchCourses().then(setCourses);
  }, []);

  const handleCourseAdded = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      <AddCourseForm onCourseAdded={handleCourseAdded} />
      <CourseList courses={courses} setCourses={setCourses}/>
   {/* <LectureScheduler/>
   <InstructorList/> */}

   
    </div>
  );
}

export default AdminDashboard;
