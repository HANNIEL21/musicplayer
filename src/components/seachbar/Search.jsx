import React from 'react';
import { FaSearch} from "react-icons/fa"

const Search = () => {
    return (
        <div className=''>
            <div className="input-group mb-3">
                <input type="text" className="form-control border border-3 border-light" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-light border border-3 border-light d-flex align-items-center justify-content-center" type="button" id="button-addon2"><FaSearch className='text-primary h4 m-0'/></button>
            </div>
        </div>
    )
}

export default Search