import React from 'react';
import './float.css';

import {
    RiHome7Line,
    RiMusic2Line,
    RiSearch2Line,
} from 'react-icons/ri';

import { MdOutlineLibraryMusic } from 'react-icons/md';

const Float = () => {

    return (
        <div className='float d-flex align-items-center justify-content-center'>

            <div className="container d-flex align-items-center justify-content-center">

                <ul className="nav nav-pills row d-flex align-items-center justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item col-3" role="presentation">
                        <button className="nav-link active p-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            <RiHome7Line className='m-0 h3 fw-bold' />
                        </button>
                    </li>
                    <li className="nav-item col-3" role="presentation">
                        <button className="nav-link p-1" id="pills-music-tab" data-bs-toggle="pill" data-bs-target="#pills-music" type="button" role="tab" aria-controls="pills-music" aria-selected="false">
                            <RiMusic2Line className='m-0 h3 fw-bold' />
                        </button>
                    </li>
                    <li className="nav-item col-3" role="presentation">
                        <button className="nav-link p-1" id="pills-search-tab" data-bs-toggle="pill" data-bs-target="#pills-search" type="button" role="tab" aria-controls="pills-search" aria-selected="false">
                            <RiSearch2Line className='m-0 h3 fw-bold' />
                        </button>
                    </li>
                    <li className="nav-item col-3" role="presentation">
                        <button className="nav-link p-1" id="pills-library-tab" data-bs-toggle="pill" data-bs-target="#pills-library" type="button" role="tab" aria-controls="pills-library" aria-selected="false">
                            <MdOutlineLibraryMusic className='m-0 h3 fw-bold' />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Float