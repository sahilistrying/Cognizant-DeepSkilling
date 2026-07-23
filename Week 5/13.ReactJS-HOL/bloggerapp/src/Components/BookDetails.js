import React from "react";
function BookDetails() {
  const books = [
    {
      id: 1,
      title: "React Explained",
      author: "Zac Gordon",
      price: 450
    },
    {
      id: 2,
      title: "JavaScript Basics",
      author: "John Doe",
      price: 350
    }
  ];
  return (
    <div>
      <h2>Book Details</h2>
      {books.map(book => (
        <div key={book.id}>
          <h4>{book.title}</h4>
          <p>Author: {book.author}</p>
          <p>Price: â‚¹{book.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default BookDetails;
