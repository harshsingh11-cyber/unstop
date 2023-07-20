import React from 'react';
import add from './imges/add.png';

function Add({checkFun}) {
  return (
    <div className="l-one-1">
    <div className="last-one-data">
      <div  onClick={()=> checkFun()} className="last-one-data-1">
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
  )
}

export default Add
