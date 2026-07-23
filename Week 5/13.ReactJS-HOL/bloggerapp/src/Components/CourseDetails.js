import React from "react";
function CourseDetails() {
  const courses = [
    {
      id: 1,
      name: "ReactJS",
      duration: "30 Days"
    },
    {
      id: 2,
      name: "Angular",
      duration: "45 Days"
    }
  ];
  return (
    <div>
      <h2>Course Details</h2>
      {courses.map(course => (
        <div key={course.id}>
          <h4>{course.name}</h4>
          <p>Duration: {course.duration}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default CourseDetails;
