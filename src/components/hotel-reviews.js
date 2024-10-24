import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, FetchReviews } from '../redux/dbSlice'; 
import './hotel-review.css';

const ReviewCard = ({ review }) => (
  <div className="comment-card">
    <h4>{review.name} - {review.rating} ★</h4>
    <p>{review.text}</p>
  </div>
);

const HotelReview = () => {
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0); 
  const error = useSelector((state) => state.db?.error); 
  const {reviews} = useSelector((state) => state.data) || []; 
  console.log(reviews)

  useEffect(() => {
    dispatch(FetchReviews());
  }, [dispatch]);

  const postReview = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim() && rating > 0) {
      dispatch(addReview({ name, text, rating }));
      setName('');
      setText('');
      setRating(0);
    } else {
      console.error('Please fill in all fields correctly');
    }
  };

  return (
    <div>
      <div className="header">
        <h2>Please feel free to leave a review to help us make your next stay more comfortable</h2>
      </div>

      <div className="form-container">
        <h3>Leave a Comment</h3>
        <form onSubmit={postReview}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Your Name"
          />
          <textarea
            placeholder="Your Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            aria-label="Your Comment"
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
          {error && <p className="error">{error}</p>} 
        </form>
      </div>

      <div className="comments">
        <h3>Reviews</h3>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default HotelReview;
