import React from 'react';
import f from './imges/f-1.png';
import logo from './imges/logo.png';
import erth from './imges/erth.png';
import link from './imges/link.png';
import './Side.css';

function Card1() {
  return (
    <div className="sec-con-1-main">
    <div className='part-one'>
        <div className="f-1">
            <div className="h">
                <p>Total Assessment</p>
            </div>
            <div className="h-con">
                <div className="con-i">
                    <img src={f} alt="" />
                </div>
                <div className="con-j">
                    <h4>34</h4>
                </div>

            </div>
        </div>
        <div className="f-4">

            <p className='heading-p' >Total Purpose</p>

            <div className="hh-11">
                <img src={link} alt="" />
                <h4>11</h4>
            </div>
        </div>
    </div>
    <div className="f-2">
        <p className='heading-p' >Candidates</p>
        <div className="f-one">
            <div className="one-logo">
                <img src={logo} alt="" />
            </div>
            <div className="sec-con">
                <p className='sec-con-h'> 11,145 <span id='con'>+89</span></p>
                <p className='sub'>Total Candidate</p>
            </div>
            <div className="third-con">
                <p className='sec-con-h'> 114 <span id='con'>+89</span></p>
                <p className='sub'>Who Attamped</p>
            </div>
        </div>

    </div>
    <div className="f-3">
        <p className='heading-p' >Candidates Source</p>
        <div className="f-one">
            <div className="one-logo">
                <img src={erth} alt="" />
            </div>
            <div className="sec-con">
                <p className='sec-con-h'> 11,000 <span id='con'>+89</span></p>
                <p className='sub'> E-mail</p>
            </div>
            <div className="third-con xyz">
                <p className='sec-con-h'> 145 <span id='con'>+89</span></p>
                <p className='sub'> Social Share</p>
            </div>
            <div className="third-con">
                <p className='sec-con-h'> 145 <span id='con'>+89</span></p>
                <p className='sub'> Social Share</p>
            </div>
        </div>

    </div>

</div>
  )
}

export default Card1
