import React,{ useState }  from 'react';
import './Myasign.css';
import mac from './imges/mac.png';
import mac1 from './imges/mac-1.png';
import Side1 from './Side1';


function Myasign({checkFun,newFunction}) {


  return (
    <div className='my-head'>
           <div className="my-first">
              <img src={mac1}  onClick={()=>checkFun() } alt=" why" />
              <p>Assessement </p>
            </div>
            <div className="my-first-1">
              <img  onClick={()=>newFunction() }  src={mac} alt="" />
            </div>
    </div>
  )
}

export default Myasign
