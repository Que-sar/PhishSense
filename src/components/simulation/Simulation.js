import React from 'react';
import "./Simulation.css";

const Simulation = () => {
  return (
    <div className='simulation-container'>
        <div className='simulation-panel'>
            <div className='email-topbar'>
                <div className='topbar-container'>
                    <div className='done-button'>Done</div>
                    <div className='report-phishing-button'>Phishing</div>
                    <div className='delete-button'>Delete</div>
                    
                    <div className='small-line'></div>
                    <div className='reply-button'>Reply</div>
                    <div className='forward-button'>Forward</div>
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
                        <div className='flag-button'>Flag</div>
                        <div className='more-actions-button'>More Actions</div>
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