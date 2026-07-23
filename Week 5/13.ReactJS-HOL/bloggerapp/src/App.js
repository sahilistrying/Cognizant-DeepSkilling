import React from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";
function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;
  return (
    <div>
      <h1>Blogger Application</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start"
        }}
      >
        {}
        {showBooks && <BookDetails />}
        {}
        {showBlogs ? <BlogDetails /> : <p>No Blogs Available</p>}
        {}
        {(() => {
          if (showCourses) {
            return <CourseDetails />;
          }
          return null;
        })()}
      </div>
    </div>
  );
}
export default App;
