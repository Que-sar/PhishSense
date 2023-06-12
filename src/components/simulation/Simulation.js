import React, { useState } from 'react';
import "./Simulation.css";

import GiveUp from "../images/simulationIcons/giveup.svg";
import Legitimate from "../images/simulationIcons/mark.svg";
import Malicious from "../images/simulationIcons/badmark.svg";
import Report from "../images/simulationIcons/report.svg";
import Delete from "../images/simulationIcons/delete.svg";
import Reply from "../images/simulationIcons/reply.svg";
import Forward from "../images/simulationIcons/forward.svg";
import LightFlag from "../images/simulationIcons/lightflag.svg";
import DarkFlag from "../images/simulationIcons/darkflag.svg";
import More from "../images/simulationIcons/more.svg";




const Simulation = () => {

    const [flagged, setFlagged] = useState(false);
    // const [moreOpen, setMoreOpen] = useState(false);

    const flagClick = () => {
        setFlagged(!flagged);
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
                        <img src={GiveUp} alt='GiveUp' />
                    </div>
                    <div className='small-line'></div>
                    <div className='icon done-button'>
                        <img src={Legitimate} alt='Legitimate' />
                    </div>
                    <div className='icon report-phishing-button'>
                        <img src={Malicious} alt='Delete' />
                    </div>
                    <div className='small-line'></div>
                    <div className='icon report-phishing-button'>
                        <img src={Report} alt='Report' />
                    </div>
                    <div className='icon delete-button'>
                        <img src={Delete} alt='Delete' />
                    </div>
                    
                    <div className='small-line'></div>
                    <div className='icon reply-button'>
                        <img src={Reply} alt='Reply' />
                    </div>
                    <div className='icon forward-button'>
                        <img src={Forward} alt='Forward' />
                    </div>
                </div>
            </div>
            <div className='mail-body'>
                <div className='mail-head'>
                    <div className='mail-identity'>
                        <div className='sender-identity'>Sender</div>
                        <div className='sender-identity'>Reciever</div>
                        <div className='mail-attachments'>Attachments</div>
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
                    <div className='reply-button'>Reply</div>
                    <div className='forward-button'>Forward</div>
                </div>
            </div>
        </div>
        <div className='todo-panel'>
            Email
        </div>
    </div>
  )
}

export default Simulation