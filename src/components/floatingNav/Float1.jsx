import React from 'react';
import "./float.css";

import {FaBell, FaCog} from 'react-icons/fa';

const Float1 = () => {
  return (
    <div className='float1 d-flex align-items-center justify-content-evenly p-2'>
        <button className="btn btn-transparent d-flex align-items-center justify-content-center p-1">
            <FaBell className='m-0 h3 fw-bold'/>
        </button>
        <button className="btn btn-transparent d-flex align-items-center justify-content-center p-1">
            <FaCog className='m-0 h3 fw-bold'/>
        </button>
    </div>
  )
}

export default Float1