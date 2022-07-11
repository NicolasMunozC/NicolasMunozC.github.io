import React from 'react'
import upArrowIcon from '../assets/img/upArrow.svg';

function UpButton( {topButton, scrollToRef, topRef} ) {
  return (
    <div className={topButton ? 'hide' : ''}>
        <div className='upButton' >
            <button onClick={()=>{scrollToRef(topRef, 0)}}><img src={upArrowIcon} alt="Github" /></button>
        </div>
    </div>
  )
}

export default UpButton