import React from 'react';
import '../nav/nav.style.css';
//Images
import logo from '../../../src/assets/img/part-wheeler-logo.png';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Nav = () => {
    return(
    <div>
        
        <nav>
        <ul className="nav-items">
        <Link to="/">
          <img className="logo" src={logo} alt="part wheeler logo" />
        </Link>
       
            <li className="nav-item"> <HashLink to="/home/#review">REVIEWS</HashLink></li>
            <li className="nav-item"><Link to="/contact">CONTACT
            </Link></li>
            <a to="/contact" href="https://www.ebay.com/usr/partwheeler?_trksid=p2047675.l2559"className="ebay-button nav-button">Visit our Ebay Store</a>
        </ul>
        </nav>
       
    </div>
    )
   
}

export default Nav;