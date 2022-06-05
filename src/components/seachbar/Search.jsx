import React from 'react';
import { FaSearch} from "react-icons/fa"

const Search = () => {

    // const input = document.getElementById("input");
    // let userInput;
    // let suggestion = document.getElementById("suggestion");

    // const getInput = (ev) => {
    //     userInput = ev.target.value
    // }

    return (
        <div className=''>
            <div className="input-group mb-3">
                <input type="text" className="form-control border border-3 border-light" placeholder="Song, Album, Lyrics, Artist" aria-label="Recipient's username" aria-describedby="button-addon2"  id="input" />

                <div className="suggestionBox" id='suggestion'>

                </div>

                <button className="btn btn-light border border-3 border-light d-flex align-items-center justify-content-center" type="button" id="button-addon2"><FaSearch className='text-primary h4 m-0'/></button>
            </div>
        </div>
    )
}

export default Search