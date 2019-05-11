import React from 'react';
import './MovieThumbNail.css'

const MovieThumbNail = (props) => {
    return (
        <div className="moviethumb">
            <img src={props.image} alt="movieThumbNail" />

        </div>
    )
}

export default MovieThumbNail;