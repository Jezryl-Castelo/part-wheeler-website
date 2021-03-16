import React from 'react';

import '../footer/footer.styles.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <ul className="footer">
                <li className="footer-link">
                <a href="https://www.ebay.com/usr/partwheeler?_trksid=p2047675.l2559" target="_blank" rel="noreferrer">Ebay Site</a>
                </li>
                <a href="/contact" className="footer-link">Contact
                    </a>
            </ul>
        </div>
    )
}

export default Footer;