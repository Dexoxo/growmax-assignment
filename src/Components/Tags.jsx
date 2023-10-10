import React, {useEffect}from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const tagStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "5rem",
  height: "2rem",
  boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2)",
  marginBottom: "20px",
};

const cardStyle = {
  width: "30rem",
  height: "20rem",
  boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2)",
  display: "block",
  margin: "1rem",
};

const tagData = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Bhopal",
];

export default function Tags() {

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [tag])
  
  return (
    <Card style={cardStyle}>
      <Card.Header>Tags</Card.Header>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tagData.map((tag, index) => (
          <Link
            to={`/tags/${tag}`}
            key={index}
            style={{ textDecoration: "none" }}
          >
            {/* Use Link component with a dynamic route */}
            <Card style={{ ...tagStyle, margin: "10px" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "12px" }}>{tag}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </Card>
  );
}
