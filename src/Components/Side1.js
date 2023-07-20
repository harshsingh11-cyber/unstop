import React from 'react';
import x1 from './imges/cut.png';
import './Side.css';
import dash from './imges/dash.png';
import quiz from './imges/quiz.png';
import note from './imges/note.png';
import admin from './imges/admin.png';

import math from './imges/math.png';
import cale from './imges/cale.png';
import dot from './imges/dot.png';
import slink from './imges/slink.png';
import Card1 from './Card1';
import Card2 from './Card2';




function Side1({checkFun}) {
    return (
        <>
            <div className='side_main-1'>
                <div className="side-main-11">
                    <p>Menu</p>
                    <img src={x1} onClick={()=> checkFun()} alt="" />
                </div>
                <div className="side_child">
                    <div className="all_child-1">
                        <img src={dash} alt="" />
                        <p>DashBoard</p>
                    </div>
                    <div className="all_child-1">
                        <img src={note} alt="" />
                        <p>Assessment</p>
                    </div>
                    <div className="all_child-1">
                        <img src={quiz} alt="" />
                        <p>My Library</p>
                    </div>
                    <div className="all_child-1">
                        <img src={admin} alt="" />
                        <p>My Library</p>
                        <button className='btn-admin-1'> Admin</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Side1
