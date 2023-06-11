import React from 'react';

import "./Benefits.css";

import BenefitsWave from "../images/heroWave.svg";

import ShieldIcon from "../images/shieldIcon.svg";
import PeaceIcon from "../images/peaceIcon.svg";
import TrophyIcon from "../images/trophyIcon.svg";

const Benefits = () => {
  return (
    <>
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
                    Acquire habits or test skills to detect and protect against phishing,
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
                     confidently defend against phishing, and set your organisation
                      or yourself apart by certifying.
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
                    Join our comprehensive training and certification
                     program for peace of mind, effective mitigation of phishing threats,
                      and instilling confidence.
                    </p>
                </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Benefits