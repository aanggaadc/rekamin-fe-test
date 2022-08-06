import React from 'react'
import Task from './Task'
import './Card.css'

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

            <Task />

            <div className='create-task'>
                <GrAddCircle />
                New Task
            </div>
        </div>
    )
}