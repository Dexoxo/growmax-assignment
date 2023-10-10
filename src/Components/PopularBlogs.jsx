import React from "react";
import Card from "react-bootstrap/Card";

const cardStyle = {
  width: "30rem", // Set a fixed width for the square card
  height: "20rem",
  boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2)",
  display: "block",
  margin: "1rem",
};

export default function PopularBlogs() {
  const popularBlogs = [
    {
      title: "Blog 1",
      description: "This is the description of Blog 1.",
    },
    {
      title: "Blog 2",
      description: "This is the description of Blog 2.",
    },
    {
      title: "Blog 3",
      description: "This is the description of Blog 3.",
    },
    // Add more popular blogs as needed
  ];

  return (
    <Card style={cardStyle}>
      <Card.Header>Popular Blogs</Card.Header>
      <Card.Body>
        <ul>
          {popularBlogs.map((blog, index) => (
            <li key={index}>
              <strong>{blog.title}</strong>: {blog.description}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}
