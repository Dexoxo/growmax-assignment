import React, { useState } from 'react';
import { Row } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Comment from './Comment';

const cardStyle = {
  width: "50rem",
  boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2)",
  display: "block",
  paddingLeft: "20px", // Adjust the left padding as needed
  paddingBottom: "2rem", // Adjust the left padding as needed
  margin: "1rem",
};

const buttonStyle = {
  backgroundColor: "white", // White background
  color: "black", // Text color
  border: "1px solid grey", // Border style
  transition: "background-color 0.3s ease", // Transition effect
  padding: "8px 16px", // Padding
  borderRadius: "4px", // Border radius
};

const imageStyle = {
  width: "100%", // Make the image take up the full width of the card
  height: "50%", // Make the image take up half of the card's height
  objectFit: "cover", // Scale the image to cover the container while maintaining aspect ratio
};

export default function BlogCard() {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  function onClickHandle() {
    
  }
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <Card style={cardStyle}>
      <Card.Img
        variant="top"
        src="https://www.w3schools.com/w3images/woods.jpg"
        style={imageStyle}
      />
      <Card.Body>
        <Card.Title>TITLE HEADING</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display: 'flex', flexDirection: 'Row', justifyContent: 'space-between', textAlign: 'center'}}>
        <Button style={buttonStyle}>Read More...</Button>
        <div><a href="#" onClick={onClickHandle} style={{TextDecoration: 'none'}}>Comments</a> <Badge bg="secondary">{comments.length}</Badge></div>
        <div className="add-comment">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <button onClick={handleAddComment}>Add</button>
        </div>
        </div>
        <div className="comments">
          {comments.map((comment, index) => (
            <Comment key={index} commenterName="User" commentText={comment} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}