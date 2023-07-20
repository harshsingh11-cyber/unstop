import React from 'react';
import x1 from './imges/cut.png';
import arr from './imges/arr.png';
import cls from './imges/arr1.png';
import './Main.css';


function Search1({checkFun}) {
  return (
    <div className="container-1">
    <div className="container-one">
      <p>Create new assessment</p>
      <p>
        <img onClick={()=> checkFun()} src={x1} alt="" />
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
          </div>
          <div className="one-o-1">
            <span> UI/UX and Design <img src={cls} alt="" /></span>
            <span> Web Development <img src={cls} alt="" /></span>
          </div>
          <div className="one-o-1">
            <span> UI/UX and Design <img src={cls} alt="" /></span>
            
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
      <button onClick={()=> checkFun()}> Save </button>
    </div>
  </div>
  )
}

export default Search1
