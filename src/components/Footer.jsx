import React from 'react';

import logo from "../assets/images/logoFooter.svg"



const Footer = () => {
    return (
        <footer>
            <div className='containerLogo'>
                <img src={logo} alt="logo Kasa blanc sur noir" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;