import React, { useState } from 'react';
import './hotel-review.css';

const App = () => {
  const [comments, setComments] = useState({
    1: [
      { name: "Alice Johnson", text: "Absolutely loved my stay! The staff were incredibly friendly, and the room was spotless. The breakfast buffet was delicious—definitely a highlight of my trip!" },
      { name: "Mark Thompson", text: "Great hotel with beautiful views. The location was perfect for exploring the city. The only downside was the Wi-Fi was a bit slow. Would still recommend!" },
    ],
    2: [
      { name: "Sarah Williams", text: "An amazing experience from start to finish! The spa services were top-notch, and the rooftop pool was a perfect way to unwind after a busy day. I can't wait to return!" },
      { name: "James Brown", text: "The hotel was nice, but the air conditioning in my room was not working properly. Staff was responsive, but it did disrupt my sleep a bit. Overall, decent stay." },
      { name: "Emily Davis", text: "This hotel exceeded my expectations! The decor was stunning, and the bed was so comfortable. I also loved the complimentary shuttle service to the nearby attractions." },
    ],
  });
  
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e, postId) => {
    e.preventDefault();
    if (name && text) {
      const newComment = { name, text };
      setComments((prev) => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newComment],
      }));
      setName('');
      setText('');
    }
  };

  return (
    <div>
      <div className="header">
        <h2>Please feel free to leave a review to help us make your next stay more comfortable</h2>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <div className="fakeimg" style={{ height: '200px' }}></div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="form-container">
              <h3>Leave a Comment</h3>
              <form onSubmit={(e) => handleSubmit(e, 1)}>
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
                <button type="submit">Submit</button>
              </form>
            </div>

            <div className="comments">
              <h3>Comments</h3>
              {comments[1]?.length === 0 ? (
                <p>No comments yet.</p>
              ) : (
                comments[1]?.map((comment, index) => (
                  <div className="comment-card" key={index}>
                    <h4>{comment.name}</h4>
                    <p>{comment.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="card">
           

            <div className="form-container">
              <h3>Leave a Comment</h3>
              <form onSubmit={(e) => handleSubmit(e, 2)}>
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
                <button type="submit">Submit</button>
              </form>
            </div>

            <div className="comments">
              <h3>Comments</h3>
              {comments[2]?.length === 0 ? (
                <p>No comments yet.</p>
              ) : (
                comments[2]?.map((comment, index) => (
                  <div className="comment-card" key={index}>
                    <h4>{comment.name}</h4>
                    <p>{comment.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <div className="fakeimg" style={{ height: '100px' }}>Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>

          <div className="card">
            <h3>Popular Post</h3>
            <div className="fakeimg">Image</div><br />
            <div className="fakeimg">Image</div><br />
            <div className="fakeimg">Image</div>
          </div>

          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default App;
