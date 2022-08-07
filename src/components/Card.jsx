import React, { useEffect, useState } from 'react'
import Task from './Task'
import EmptyTask from './EmptyTask'
import './Card.css'
import Axios from 'axios'
import { GrAddCircle } from "react-icons/gr";

export default function Card({ id, title, description, handleShowModalCreateEdit, handleShowModalDelete, nextId, previousId, firstCard, lastCard }) {
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
                return <Task key={index} groupId={id} taskId={item.id} name={item.name} progress={item.progress_percentage}
                    nextId={nextId} previousId={previousId} firstCard={firstCard} lastCard={lastCard}
                    showCreateEditModal={handleShowModalCreateEdit} showDeleteModal={handleShowModalDelete} />
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