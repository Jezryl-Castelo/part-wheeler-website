import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

// import { useEffort } from 'react';

 const AuctionReviews = () => {
    useEffect(() => {
        const script = document.createElement("script");
        
        script.src = "//www.auctionnudge.com/feed/feedback/js/theme/table/limit/6/lang/english/UserID/partwheeler/siteid/0";
        script.innerHTML = window.onload;
    
        script.async = true;
        document.body.appendChild(script);
      }, [])

     
return (

<div id="auction-nudge-feedback" className="auction-nudge"></div>
)

}

export default withRouter(AuctionReviews)