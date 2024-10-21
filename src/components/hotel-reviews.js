import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserReview, fetchUserReviews } from '../redux/dbSlice'; 
import './hotel-review.css';

const HotelReview = ({ uid }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.db?.reviews) || []; 
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0); 

  useEffect(() => {
    dispatch(fetchUserReviews(uid)); 
  }, [dispatch, uid]); 

  console.log(reviews)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text && rating) {
      const newReview = { name, text, rating, createdAt: new Date() };
      dispatch(addUserReview(uid, newReview)); 
      setName('');
      setText('');
      setRating(0);
    }
  };

  return (
    <div>
      <div className="header">
        <h2>Please feel free to leave a review to help us make your next stay more comfortable</h2>
      </div>

      <div className="form-container">
        <h3>Leave a Comment</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <div className="rating">
            <span>Rating: </span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? 'filled' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="comments">
        <h3>Comments</h3>
        {reviews.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          reviews.map((review) => (
            <div className="comment-card" key={review.id}>
              <h4>{review.name} - {review.rating} ★</h4>
              <p>{review.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HotelReview;
