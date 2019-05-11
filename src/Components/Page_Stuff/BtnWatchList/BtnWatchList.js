import React from 'react'
import './BtnWatchList.css'


const BtnWatchList = (props) =>{
    return (
        <div className="btnwatchlist" onClick={props.onClick} text={props.text}>
            
        </div>
    )
}

export default BtnWatchList;