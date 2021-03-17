import React from 'react';
import '../nav/nav.style.css';
//Images
import logo from '../../../src/assets/img/part-wheeler-logo.png';

// import { Link,withRouter} from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
  

const Nav = (props) => {
    return(
    <div>
        <nav>
        <a href="/">
          <img className="logo" src={logo} alt="part wheeler logo" />
        </a>
        <ul className="nav-items">
        
            <li className="nav-item"> <a href="/#review">REVIEWS</a></li>
            <li className="nav-item"><a href="/contact">CONTACT
            </a></li>
            <a to="/contact" href="https://www.ebay.com/usr/partwheeler?_trksid=p2047675.l2559"className="ebay-button nav-button" target="_blank" rel="noreferrer">Visit our Ebay Store</a>
            <li className="nav-item show-on-mobile"><a href="https://www.ebay.com/usr/partwheeler?_trksid=p2047675.l2559">EBAY STORE</a></li>
        </ul>
        </nav>
       
    </div>
    ) 
}

export default Nav;