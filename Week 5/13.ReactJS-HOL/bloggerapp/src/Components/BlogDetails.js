import React from "react";
function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "React Hooks",
      author: "Admin"
    },
    {
      id: 2,
      title: "Conditional Rendering",
      author: "Developer"
    }
  ];
  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
          <p>Author: {blog.author}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default BlogDetails;
