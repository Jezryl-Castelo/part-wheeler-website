import React from 'react';
import { useEffect } from 'react';

import AuctionReviews from '../auction-nudge-reviews/auction-nudge-review.component';
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
          <AuctionReviews />
         
        <div className="reviews">
          <h3 id="review" className="review-title">Reviews Feed</h3>
          <h4 className="review-description">Specializing in Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beater voluptate, pisa veil provident id  dolores ornis, in impedes.</h4>
          </div>
          <div className="feedback">
          <div id="auction-nudge-feedback" className="auction-nudge"><AuctionReviews />
            </div>
          </div>
          </div>
    )
}

export default ReviewsFeed;

