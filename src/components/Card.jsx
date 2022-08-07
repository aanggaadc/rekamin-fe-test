import React from 'react'
import Task from './Task'
import './Card.css'

import { GrAddCircle } from "react-icons/gr";

export default function Card({ title, description, handleShowModalCreateEdit }) {
    return (
        <div className='card-container'>
            <div className='group-title'>
                {title}
            </div>

            <div className='date'>
                {description}
            </div>

            <Task />

            <button onClick={handleShowModalCreateEdit} className='create-task'>
                <GrAddCircle />
                New Task
            </button>
        </div>
    )
}