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
        <ul className="nav-items">
        <a href="/">
          <img className="logo" src={logo} alt="part wheeler logo" />
        </a>
            <li className="nav-item"> <a href="/#review">REVIEWS</a></li>
            <li className="nav-item"><a href="/contact">CONTACT
            </a></li>
            <a to="/contact" href="https://www.ebay.com/usr/partwheeler?_trksid=p2047675.l2559"className="ebay-button nav-button">Visit our Ebay Store</a>
        </ul>
        </nav>
       
    </div>
    ) 
}

export default Nav;