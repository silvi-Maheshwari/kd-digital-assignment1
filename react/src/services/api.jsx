const api = {
    fetchCourses: async () => {
      const res = await fetch("http://localhost:5000/api/courses");
      return res.json();
    },
    fetchInstructors: async () => {
      const res = await fetch("http://localhost:5000/api/instructors");
      return res.json();
    },
    addCourse: async (course) => {
      await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });
    },
    deleteCourse: async (id) => {
        await fetch(`http://localhost:5000/api/courses/${id}`, {
          
          method: "DELETE",
        });
      },
    scheduleLecture: async (lecture) => {
      await fetch("http://localhost:5000/api/lectures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lecture),
      });
    },
  };
  export default api;