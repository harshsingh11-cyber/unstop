import React from 'react';
import './Side.css';
import math from './imges/math.png';
import cale from './imges/cale.png';
import dot from './imges/dot.png';
import slink from './imges/slink.png';

function Card2() {
  return (
    <div className="l-two-2">
                <div className="last-two-1">
                    <div className="last-two-11">
                        <div className='mob-one-123'>
                            <img src={math} alt="" />  <h4>Math Assessment</h4>
                        </div>

                        <div className="last-two-con">
                            <div className='last-two-con-1'>
                                <span id='ps'>JOB</span>
                                <img src={cale} alt="" />
                                <span id='sp'>20 Apr 2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="last-two-22">
                        <img src={dot} alt="" />
                    </div>
                </div>
                <div className="last-two-2">
                    <div className="last-two-data-1">
                        <div className="last-two-data-11">
                            <span>00</span>
                            <span>Duration</span>
                        </div>
                        <div className="last-two-data-11">
                            <span>00</span>
                            <span>Duration</span>
                        </div>
                    </div>
                    <div className="last-two-con-data-3">
                        <div className="button-con">
                            <img src={slink} alt="" />
                            <span>Share</span>
                        </div>
                        <span className="user-collector">
                            <span className='username-1'>
                                <span>LP</span>
                            </span>
                            <span className='username-2'>
                                <span>LP</span>
                            </span>
                            <span className='username-3'>
                                <span>LP</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
  )
}

export default Card2
