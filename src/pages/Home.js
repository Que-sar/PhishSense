import React from 'react';
import "./Home.css";
import HeroImage from "../components/images/heroImage.png";
import BenefitsWave from "../components/images/heroWave.svg";

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
            Build natural resistance against malicious emails
            through a comprehensive training and certification program
            offered by PhishSense.             
            </div>
            <div className='hero-call-to-action'>
                <button className='hero-action-button'>Get started</button>
                </div>    
        </div>
        <div className='hero-image'>
            <img src={HeroImage} alt='Hero'/>
            </div>
    </div>
    <div className='benefits-section'>
        <div className='benefits-wave'>
            <img src={BenefitsWave} alt='Benefits Wave' />
        </div>
        <div className='benefits-title'>
            Benefits
        </div>
        <div className='benefits-list'>
            <div className='firstBenefit'>One</div>
            <div className='secondBenefit'>Two</div>
            <div className='thirdBenefit'>Three</div>
        </div>
    </div>
</div>


)

    };

export default Home;