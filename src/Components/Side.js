import React from 'react';
import './Side.css';
import dash from './imges/dash.png';
import quiz from './imges/quiz.png';
import note from './imges/note.png';
import admin from './imges/admin.png';

function Side() {
    return (
        <div className='side_main'>
            <div className="side_child">
                <div className="all_child">
                    <img src={dash} alt="" />
                    <p>DashBoard</p>
                </div>
                <div className="all_child">
                    <img src={note} alt="" />
                    <p>Assessment</p>
                </div>
                <div className="all_child">
                    <img src={quiz} alt="" />
                    <p>My Library</p>
                </div>
                <div className="all_child">
                    <button className='btn-admin'> Admin</button>
                    <img src={admin} alt="" />
                    <p>My Library</p>
                </div>
            </div>
        </div>
    )
}

export default Side
