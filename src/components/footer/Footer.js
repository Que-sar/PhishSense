import React from 'react';
import "./Footer.css";


const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-forms'>
            <div className='footer-policies left-column'>
                <div className='footer-title'>Contact Us</div>
                <div className='footer-links'>
                    <ul>
                        <li>Email: example@mail.com</li>
                        <li>Phone: +44 234 5234</li>
                    </ul>
                </div>
            </div>
            <div className='footer-policies right-column'>
                <div className='footer-title'>Quick Links</div>
                <div className='footer-links'>
                    <ul>
                        <li>link1</li>
                        <li>link2</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footer-bottom'></div>
    </div>
  )
}

export default Footer