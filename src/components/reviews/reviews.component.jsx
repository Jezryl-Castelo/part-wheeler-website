import React from 'react';
import { useEffect } from 'react';

import '../reviews/reviews.styles.css';


const ReviewsFeed = () => {
useEffect(() => {
    const script = document.createElement('script');

    script.src = "//www.auctionnudge.com/feed/feedback/js/theme/table/limit/6/lang/english/UserID/partwheeler/siteid/0";
    script.async = true
    document.body.appendChild(script);
}, [])
return(
  <div>
    <div className="reviews">
      <h3 id="review" className="review-title">Reviews Feed</h3>
      <h4 className="review-description">Check out what our customers are saying about Part Wheeler</h4>
    </div>
    <div className="feedback">
      <div id="auction-nudge-feedback" className="auction-nudge">
    </div>
    </div>
  </div>
  )
}

export default ReviewsFeed;

