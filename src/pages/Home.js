import React from 'react';
import "./Home.css";
import HeroImage from "../components/images/heroImage.png";

const Home = () => {

return (
<div className='home-container'>
    <div className='hero-section'>
        <div className='hero-action'>
            <div className='hero-title'>
                Sense your security,
                <br/>
                empower yourself.
            </div>
            <div className='hero-description'>
            <br/>
            Build natural resistance against malicious emails<br/>
            through a comprehensive training and certification program <br/>
            offered by PhishSense.             
            </div>
            <div className='hero-call-to-action'>
            <br/>
                <button className='hero-action-button'>Try for free!</button>
                </div>    
        </div>
        <div className='hero-image'>
            <img src={HeroImage} alt='Hero'/>
            </div>
    </div>
    <div className='benefits-section'>
        <div className='firstBenefit'>One</div>
        <div className='secondBenefit'>Two</div>
        <div className='thirdBenefit'>Three</div>
    </div>
</div>


)

    };

export default Home;