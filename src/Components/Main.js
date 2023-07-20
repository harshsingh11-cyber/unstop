import React, { useState } from 'react';
import './Main.css';
import mob from './imges/mob.png';
import line from './imges/line.png';

import f from './imges/f-1.png';
import logo from './imges/logo.png';
import erth from './imges/erth.png';
import link from './imges/link.png';

import add from './imges/add.png';
import math from './imges/math.png';
import cale from './imges/cale.png';
import dot from './imges/dot.png';
import slink from './imges/slink.png';

import s1 from './imges/s-1.png';
import s3 from './imges/s-3.png';
import s2 from './imges/s-2.png';

import mac from './imges/mac.png';
import mac1 from './imges/mac-1.png';

import x1 from './imges/cut.png';
import arr from './imges/arr.png';
import cls from './imges/arr1.png';



function Main({newFunction}) {



  const [bol, setBol] = useState(false);


  function handleBol() {
    console.log(bol);
    setBol(!bol);
  }

  function Togle() {
    return (
      <>
        <div className="container">
          <div className="container-one">
            <p>Create new assessment</p>
            <p onClick={handleBol}>
              <img  src={x1} alt="" />
            </p>
          </div>
          <div className="container-two">
            <div className="data-one">
              <h5>Name of assessment</h5>
              <p>Type Here</p>
            </div>
            <div className="data-one">
              <h5>Purpose of the test is</h5>
              <p> <span>Select</span> <img src={arr} alt="" /></p>
            </div>
            <div className="data-one">
              <h5>Description</h5>
              <p> <span>Select</span> <img src={arr} alt="" /></p>
            </div>
            <div className="data-one">
              <h5>Skills</h5>
              <div className='data-one-1'>
                <div className="one-o-1">
                  <span> UI/UX and Design <img src={cls} alt="" /></span>
                  <span> No of Question <img src={cls} alt="" /></span>
                  <span> Web Development <img src={cls} alt="" /></span>
                </div>
                <div className="one-o-1">
                  <span> UI/UX and Design <img src={cls} alt="" /></span>
                  <span> Web Development <img src={cls} alt="" /></span>
                </div>

                <div className="data-one-t">
                  <h5>Type here</h5>
                </div>
              </div>
            </div>
            <div className="data-one">
              <h5>Duration of assessment</h5>
              <p> <span>Select</span> <img src={arr} alt="" /></p>
            </div>
          </div>
          <div className="container-three">
            <button onClick={handleBol}> Save </button>
          </div>
        </div>
      </>
    )
  }


  return (
    <div className='main_div'>
      <div className="div-one">


        {/* ----------------------------------------- */}

        <div className="div-mobile">
          <div className="mob-first">
            <div className="mob-first-1">
              <img src={mac1} alt=" why" />
              <p>Assessement </p>
            </div>
            <div className="mob-first-2">
              <img  src={mac} alt="" />
            </div>
          </div>
          <div className="mob-con">
            <p>My Assessments</p>
            <p>Unstop Assessments</p>
          </div>
        </div>

        {/* -------------------------------------------------- */}

        <div className="one-1">
          <div className="one-head">
            <p>Assessment</p>
            <img src={line} alt="" />
          </div>

          <div className="sec-head">
            <p>My Assessments</p>
          </div>
        </div>
        <div className="one-2">
          <img onClick={()=> newFunction()} src={mob} alt="" />
        </div>
      </div>

      <div className="sec-112">
        <div className="div-sec">

          <div className="sec-1">
            <div className="sec-head">
              <p className='heading-p' >Assessments Overview</p>
              <div className='mobile'>
                <div className="heading-mob">
                  <p className='heading-p'> My Assessment </p>
                  <p className='newicon'>
                    <img src={s1} alt="" />
                    <img src={s2} alt="" />
                    <img src={s3} alt="" />
                  </p>

                </div>
              </div>

            </div>
            <div className="sec-con-1">
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
              <div className="f-4">

                <p className='heading-p' >Total Purpose</p>

                <div className="hh-11">
                  <img src={link} alt="" />
                  <h4>11</h4>
                </div>
              </div>

            </div>
          </div>
          <div className="mysec">
            <div className="sec-part-1">
              <p>My Assessment</p>
            </div>
            <div className="sec-part-2">

            </div>
          </div>
          <div className="lastsec">
            <div className="lastone">
              <div className="l-one-1">
                <div className="last-one-data">
                  <div onClick={handleBol} className="last-one-data-1">
                    <div className='lastimage'>
                      <img src={add} alt="" />
                    </div>

                    <h4>New Assessment</h4>
                  </div>
                  <div className="last-one-data-2">
                    <p>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
                  </div>
                </div>
              </div>
              <div className="l-two-2">
                <div className="last-two-1">
                  <div className="last-two-11">
                    <img src={math} alt="" />
                    <div className="last-two-con">
                      <h4>Math Assessment</h4>
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
                  <div className="last-two-con-data-2">
                    <div className="button-con">
                      <img src={slink} alt="" />
                      <span>Share</span>
                    </div>
                    <div className='username'>
                      <p>LP</p>
                    </div>
                  </div>





                </div>

              </div>
              <div className="l-two-2">
                <div className="last-two-1">
                  <div className="last-two-11">
                    <img src={math} alt="" />
                    <div className="last-two-con">
                      <h4>Math Assessment</h4>
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
            </div>
            <div className="lasttwo">

            </div>
          </div>

        </div>
      </div>
      <div>
        {bol && (
          <Togle />
        )}
      </div>

    </div>
  )
}

export default Main


