import React from 'react';
import './float.css';

import {IoFilter} from "react-icons/io5"

const Float2 = () => {
  return (
    <div className='float2 d-flex justify-content-between align-items-center px-3  py-2'>
        <h2 className='text-light fw-bold m-0'>Music</h2>
        <button className="btn btn-outline-light p-1">
            <IoFilter className='m-0 h6 fw-bold'/>
        </button>
    </div>
  )
}

export default Float2