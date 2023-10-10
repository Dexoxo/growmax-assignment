import React from "react";
import Card from "react-bootstrap/Card";

const cardStyle = {
  width: "30rem", // Set a fixed width for the square card
  height: "20rem", // Set a fixed height to make it square
  boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2)",
  display: "block",
  paddingRight: "10px", // Adjust the left padding as needed
  paddingBottom: "10px", // Adjust the left padding as needed
  margin: "1rem",
};

const imageStyle = {
  width: "100%", // Make the image take up the full width of the card
  height: "50%", // Make the image take up half of the card's height
  objectFit: "cover", // Scale the image to cover the container while maintaining aspect ratio
};

export default function UserDetailCard() {
  return (
    <Card style={cardStyle}>
      {/* Add an image to the card */}
      <Card.Img
        variant="top"
        src="https://www.w3schools.com/w3images/woods.jpg" // Replace with the actual URL of your image
        alt="User Image"
        style={imageStyle}
      />

      {/* Place your user details content here */}
      <Card.Body>
        <Card.Title>User Details</Card.Title>
        <Card.Text>
          Name: John Doe
          <br />
          Email: johndoe@example.com
          <br />
          Location: New York
          {/* Add more user details as needed */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
