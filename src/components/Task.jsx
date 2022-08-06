import React from 'react'
import './Task.css'
import Completed from '../assets/Completed.svg'
import { BsThreeDots } from "react-icons/bs";

export default function Task() {
    return (
        <div className='task-container'>
            <div className='top'>
                Re-designed the zero-g doggie bags. No more spills!
            </div>
            <div className='line' />
            <div className='bottom'>
                <img src={Completed} alt="completed" />
                <BsThreeDots color='#1D1F20' />
            </div>
        </div>

    )
}