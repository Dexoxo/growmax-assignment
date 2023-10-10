
import React from 'react';

const Comment = ({ commenterName, commentText }) => {
  return (
    <div className="comment">
      <strong>{commenterName}</strong>: {commentText}
    </div>
  );
};

export default Comment;
