import React from 'react';
import './Second.css';
import s1 from './imges/s-1.png';
import s3 from './imges/s-3.png';
import s2 from './imges/s-2.png';

function Second() {
  return (
    <div className="second-main">
    <p className='heading-p'> My Assessment </p>
    <p className='newicon'>
      <img src={s1} alt="" />
      <img src={s2} alt="" />
      <img src={s3} alt="" />
    </p>

  </div>
  )
}

export default Second
