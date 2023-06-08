import React from 'react';
import "./Home.css";
import HeroImage from "../components/images/heroImage.png";

const Home = () => {

return (
<div className='home-container'>
    <div className='hero-section'>
        <div className='hero-action'>
            <div className='hero-title'>
                <h1>Title</h1>
            </div>
            <div className='hero-description'>
                <h3>I am the description</h3>
                </div>
            <div className='hero-call-to-action'>
                <button>Call</button>
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