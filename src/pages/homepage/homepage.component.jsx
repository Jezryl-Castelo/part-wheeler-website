import React from 'react';
import { withRouter } from 'react-router';


import Header from '../../components/header/header.component';
import ProductFeed from '../../components/product-feed/product-feed-component';
import ReviewsFeed from '../../components/reviews/reviews.component';

const Homepage = () => {
    return(
        <div className="homepage">
            
            <Header />
            <ProductFeed />
            <ReviewsFeed />
        </div>
    )
}

export default withRouter(Homepage);