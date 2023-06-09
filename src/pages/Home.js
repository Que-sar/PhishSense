import React from 'react';
import "./Home.css";
import HeroImage from "../components/images/heroImage.png";
import BenefitsWave from "../components/images/heroWave.svg";

import ShieldIcon from "../components/images/shieldIcon.svg";
import PeaceIcon from "../components/images/peaceIcon.svg";
import TrophyIcon from "../components/images/trophyIcon.svg";


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
        <div className='benefits-wave'>
            <img src={BenefitsWave} alt='Benefits Wave' />
        </div>
    <div className='benefits-section'>
        <div className='benefits-title'>
            Benefits
        </div>
        <div className='benefits-description'>
            What we offer to increase your security, elevate your confidence, achieve your goals.
        </div>
        <div className='benefits-list'>


            <div className='firstBenefit'>
                <div className='benefit-item-icon'>
                    <img src={ShieldIcon} alt='Protection' />
                </div>
                <div>
                    <div className='benefit-item-title'>
                    Enforce Your Defense
                    </div>
                    <p className='benefit-item-description'>
                    Acquire or test skills to detect and protect against phishing,
                     showcasing resilience and gaining a cybersecurity edge.
                    </p>
                </div>
                </div>

            <div className='secondBenefit'>
                <div className='benefit-item-icon'>
                    <img src={TrophyIcon} alt='Protection' />
                </div>
                <div>
                    <div className='benefit-item-title'>
                    Prove Digital Resilience
                    </div>
                    <p className='benefit-item-description'>
                    Demonstrate your ability to navigate securely,
                     confidently defend against phishing, and set your organisation or yourself apart by certifying.
                    </p>
                </div>
                </div>

            <div className='thirdBenefit'>
                <div className='benefit-item-icon'>
                    <img src={PeaceIcon} alt='Protection' />
                </div>
                <div>
                    <div className='benefit-item-title'>
                    Gain Peace of Mind
                    </div>
                    <p className='benefit-item-description'>
                    Join our comprehensive training and certification program for peace of mind, effective mitigation of phishing threats, and instilling confidence.
                    </p>
                </div>
                </div>
        </div>
    </div>


    <div className='pricing-plan-section'>
        <div className='pricing-title-section'>
            <div className='pricing-title'>
                Pricing Plan
            </div>
            <div className='pricing-title-description'>
                Tailor it to your needs.
            </div>
            <div className='pricing-title-plan'>
                <button className='plan-button individual-plan'>
                    Individual Plan
                </button> 
                <button className='plan-button enterprise-plan'>
                    Enterprise Plan
                </button> 
            </div>
        </div>
        <div className='pricing-panel-section'>
            <div className='pricing-panel training'>
                Training Essentials
            </div>

            <div className='pricing-panel certification'>
                Certification Exam
            </div>

            <div className='pricing-panel comprehensive'>
                Comprehensive Mastery
            </div>    
        </div>
    </div>




</div>


)

    };

export default Home;