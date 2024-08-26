import React from 'react';
import './HostDashboard.css';
import { HostNavbar } from './HostNavbar';

export const HostReviews = () => {
  return (
    <div>
      <HostNavbar />
      <div className="review-section">
        <h2>Your reviews <span className="last-30-days">last 30 days</span></h2>
        <div className="overall-rating">
          <h1>5.0 <span className="star">⭐</span></h1>
          <p>overall rating</p>
        </div>

        <div className="rating-bar">
          <p>5 stars</p>
          <div className="bar">
            <div className="filled" style={{ width: '100%' }}></div>
          </div>
          <span>100%</span>
        </div>
        <div className="rating-bar">
          <p>4 stars</p>
          <div className="bar">
            <div className="not_filled" style={{ width: '100%' }}></div>
          </div>
          <span>0%</span>
        </div>
        <div className="rating-bar">
          <p>3 stars</p>
          <div className="bar">
            <div className="not_filled" style={{ width: '100%' }}></div>
          </div>
          <span>0%</span>
        </div>
        <div className="rating-bar">
          <p>2 stars</p>
          <div className="bar">
            <div className="not_filled" style={{ width: '100%' }}></div>
          </div>
          <span>0%</span>
        </div>
        <div className="rating-bar">
          <p>1 stars</p>
          <div className="bar">
            <div className="not_filled" style={{ width: '100%' }}></div>
          </div>
          <span>0%</span>
        </div>

        <div className="reviews">
          <h3>Reviews (2)</h3>
          <div className="review">
            <p>⭐️⭐️⭐️⭐️⭐️</p>
            <p><strong>Elliot</strong> December 1, 2022</p>
            <p>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks 
              and there was not a single issue. Super clean when we picked it up and the host 
              is very comfortable and understanding. Highly recommend!</p>
          </div>
          <div className="review">
            <p>⭐️⭐️⭐️⭐️⭐️</p>
            <p><strong>Sandy</strong> November 23, 2022</p>
            <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
          </div>
        </div>
      </div>
      <footer className='host_footer'>© 2022 #VANLIFE</footer>
    </div>
  );
};