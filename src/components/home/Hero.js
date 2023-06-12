import React from 'react';

import HeroImage from "../images/heroImage.png";

import "./Hero.css";

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='hero-action'>
            <div className='hero-title'>
                Sense your security,
                <br/>
                empower yourself.
            </div>
            <div className='hero-description'>
            Build natural resistance against malicious emails
            through a comprehensive training and certification program
            offered by PhishSense.             
            </div>
            <div className='hero-call-to-action'>
                <button className='hero-action-button'>Get started</button>
                <button className='hero-tryout-button'>Try our demo</button>
                </div>    
        </div>
        <div className='hero-image'>
            <img src={HeroImage} alt='Hero'/>
            </div>
    </div>
  )
}

export default Hero;