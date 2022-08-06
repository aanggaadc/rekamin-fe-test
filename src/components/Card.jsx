import React from 'react'
import './Card.css'
import Completed from '../public/assets/Completed.svg'
import { BsThreeDots } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";

export default function Card() {
    return (
        <div className='card-container'>
            <div className='group-title'>
                Group Task 1
            </div>

            <div className='date'>
                january - March
            </div>

            <div className='task-container'>
                <div className='top'>
                    Re-designed the zero-g doggie bags. No more spills!
                </div>
                <div className='line' />
                <div className='bottom'>
                    <img src={Completed} alt="" />
                    <BsThreeDots color='#1D1F20' />
                </div>
            </div>

            <div className='create-task'>
                <GrAddCircle />
                New Task
            </div>
        </div>
    )
}