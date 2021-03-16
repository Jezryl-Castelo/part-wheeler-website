import React from 'react';

import '../header/header.style.css';

import '../product-feed/product-feed.styles.css';
import arrow from '../../assets/img/long-arrow-1.png';

const Header = () => {
    return(
        <div>
        <section>
        <div className="header-container">
              <img className="long-arrow" src={arrow} alt="arrow"/>
              <h1 className="header-title">Part Wheeler</h1>
              <h2 className="header-description">Seeking out the highest quality in used auto parts</h2>
              <a href="https://www.ebay.com/usr/partwheeler?_trksid=p2047675.l2559" className="ebay-button header-button" target="_blank" rel="noreferrer">Visit our Ebay Store</a>
            </div> 
      </section>
      </div>
    )
}

export default Header; 