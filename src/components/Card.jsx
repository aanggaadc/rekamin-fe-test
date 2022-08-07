import React, { useEffect, useState } from 'react'
import Task from './Task'
import EmptyTask from './EmptyTask'
import './Card.css'
import Axios from 'axios'
import { GrAddCircle } from "react-icons/gr";

export default function Card({ id, title, description, handleShowModalCreateEdit }) {
    const [task, setTask] = useState([])
    const getTask = () => {
        Axios.get(`todos/${id}/items`)
            .then((response) => {
                setTask(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getTask()
    }, [task])

    return (
        <div className='card-container'>
            <div className='group-title'>
                {title}
            </div>

            <div className='date'>
                {description}
            </div>
            {task.length > 0 ? task.map((item, index) => {
                return <Task key={index} name={item.name} progress={item.progress_percentage} />
            }) :
                <EmptyTask />
            }

            <button type='button' onClick={() => {
                handleShowModalCreateEdit(id)
            }} className='create-task'>
                <GrAddCircle />
                New Task
            </button>
        </div>
    )
}