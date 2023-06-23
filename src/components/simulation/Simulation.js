import React, { useState } from 'react';
import "./Simulation.css";

import GiveUp from "../images/simulationIconsSmaller/giveup.svg";
import Report from "../images/simulationIconsSmaller/report.svg";
import Delete from "../images/simulationIconsSmaller/delete.svg";
import Reply from "../images/simulationIconsSmaller/reply.svg";
import Forward from "../images/simulationIconsSmaller/forward.svg";
import LightFlag from "../images/simulationIconsSmaller/lightflag.svg";
import DarkFlag from "../images/simulationIconsSmaller/darkflag.svg";
import More from "../images/simulationIconsSmaller/more.svg";
import ProfilePic from "../images/simulationIconsSmaller/profilePic.svg";
import Example from './Example';

const Simulation = () => {

    const [flagged, setFlagged] = useState(false);
    const [legitimateColor, setLegitimateColor] = useState("#f5f5f5");
    const [maliciousColor, setMaliciousColor] = useState("#f5f5f5");
    // const [moreOpen, setMoreOpen] = useState(false);

    const flagClick = () => {
        setFlagged(!flagged);
    }

    const legitimateClick = () => {
        setMaliciousColor("#f5f5f5");
        setLegitimateColor("#1ED44B");
    }

    const maliciousClick = () => {
        setLegitimateColor("#f5f5f5");
        setMaliciousColor("#DE2626");
    }

    // const moreClick = () => {
    //     setMoreOpen(!moreOpen);
    // }

  return (
    <div className='simulation-container'>
        <div className='simulation-panel'>
            <div className='email-topbar'>
                <div className='topbar-container'>
                    <div className='icon done-button'>
                        <button className='giveup-click'>
                            <img src={GiveUp} alt='GiveUp' />
                        </button>
                    </div>
                    <div className='small-line'></div>
                    <div className='icon done-button'>
                        <button className='legitimate-click' onClick={legitimateClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: legitimateColor }}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        </button>
                    </div>
                    <div className='icon markbad-phishing-button'>
                        <button className='malicious-click' onClick={maliciousClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: maliciousColor }}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                        </button>
                    </div>
                    <div className='small-line'></div>
                    <div className='icon report-phishing-button'>
                        <button className='report-click'>
                            <img src={Report} alt='Report' />
                        </button>
                    </div>
                    <div className='icon delete-button'>
                        <button className='delete-click'>
                            <img src={Delete} alt='Delete' />
                        </button>
                    </div>
                    
                    <div className='small-line'></div>
                    <div className='icon reply-button'>
                        <button className='reply-click'>
                            <img src={Reply} alt='Reply' />
                        </button>
                    </div>
                    <div className='icon forward-button'>
                        <button className='forward-click'>
                            <img src={Forward} alt='Forward' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mail-body'>
                <div className='mail-head'>
                    <div className='mail-identity'>
                        <div className='mail-subject'>Dinner reservation</div>
                        <div className='sender-identity'>
                            <div className='sender-photo'>
                                <img src={ProfilePic} alt='ProfilePicture' className='profile-icon'/>
                            </div>
                            <div className='sender-name'>Miles Martines</div>
                        </div>
                        <div className='reciever-identity'>To: Katrina Milka</div>
                        <div className='mail-attachments'>Attachments</div>
                        <div className='literal-email'>
                            <div className="read-container">
                                <Example />
                            </div>
                        </div>
                    </div>
                    <div className='mail-options'>
                        <div className='icon flag-button'>
                            <button onClick={flagClick} className='flag-click'>
                                <img src={flagged ? DarkFlag : LightFlag} alt='Flag' />
                            </button>
                        </div>
                        <div className='icon more-actions-button'>
                            <button className='more-click'>
                                <img src={More} alt='Show more' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mail-foot'>
                    <div className='reply-button'>
                        <button className='reply-click bottom'>
                            <img src={Reply} alt='Reply' className='reply-icon-down'/>
                        </button>
                    </div>
                    <div className='forward-button'>
                        <button className='forward-click bottom'>
                            <img src={Forward} alt='Forward' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='todo-panel'>
            <div className='todo-ranking-panel'>
                <div className='todo-rankingpanel-top'>
                    When to do?
                </div>

                <div className='todo-placing'>
                    <div className='first-place'>
                        1. 
                    </div>
                    <div className='second-place'>
                        2. 
                    </div>
                    <div className='third-place'>
                        3. 
                    </div>
                </div>
            </div>
            <div className="horizontalLine"></div>
            <div className='todo-list-panel'>
                <div className='todo-listingpanel-top'>
                    What to do?
                </div>
                <div className='todo-listing'>
                    <div className='first-list'>
                        First
                    </div>
                    <div className='second-list'>
                        Second
                    </div>
                    <div className='third-list'>
                        Third
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Simulation