import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, FetchReviews } from '../redux/dbSlice'; 
import './hotel-review.css';
import { getAuth } from 'firebase/auth';

const HotelReview = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.db?.reviews) || []; 
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0); 
  const [error, setError] = useState(null); 
  const auth = getAuth();
  const currentUserId = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(()=>{
    dispatch(FetchReviews());
    }, [dispatch])
  




  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text && rating) {
      const newReview = { name, text, rating, createdAt: new Date() };
      dispatch(addReview(currentUserId, newReview))
        .catch((err) => setError(err.message)); 
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
          {error && <p className="error">{error}</p>} {/* Display error */}
        </form>
      </div>

      <div className="comments">
        <h3>Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
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
