import React, { useState, useEffect } from 'react'
import './Home.css'
import Header from '../../components/Header'
import Card from '../../components/Card'
import ModalDelete from '../../components/ModalDelete'
import CreateEditModal from '../../components/CreateEditModal'
import GroupModal from '../../components/GroupModal'
import Axios from 'axios'

export default function Home() {
    const [groupTask, setGroupTask] = useState([])
    const [taskId, setTaskId] = useState("")
    const [groupId, setGroupId] = useState("")
    // MODAL CREATE & EDIT
    const [showModalCreateEdit, setShowModalCreateEdit] = useState(false);
    const handleCloseModalCreateEdit = () => {
        setShowModalCreateEdit(false)
        setTaskId("")
    }
    const handleShowModalCreateEdit = (id) => {
        setShowModalCreateEdit(true)
        setTaskId(id)
    }

    // MODAL GROUP
    const [showModalGroup, setShowModalGroup] = useState(false);
    const handleCloseModalGroup = () => setShowModalGroup(false);
    const handleShowModalGroup = () => setShowModalGroup(true);

    // MODAL DELETE
    const [showModalDelete, setShowModalDelete] = useState(false);
    const handleCloseModalDelete = () => {
        setShowModalDelete(false)
        setGroupId("")
        setTaskId("")
    }
    const handleShowModalDelete = (groupId, taskId) => {
        setShowModalDelete(true)
        setGroupId(groupId)
        setTaskId(taskId)
    }

    const getGroupTask = () => {
        Axios.get("todos")
            .then((response) => {
                setGroupTask(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getGroupTask()
    }, [groupTask])

    return (
        <>
            <Header handleShowModalGroup={handleShowModalGroup} />

            <div className='home-container'>
                {groupTask.map((item, index, elements) => {
                    let nextCard = {}
                    let previousCard = {}
                    if (elements.length - 1 === index) {
                        previousCard = elements[index - 1]
                    } else {
                        nextCard = elements[index + 1]
                        previousCard = elements[index - 1]
                    }

                    return <Card key={index} id={item.id} title={item.title} description={item.description} nextId={nextCard.id}
                        handleShowModalCreateEdit={handleShowModalCreateEdit} handleShowModalDelete={handleShowModalDelete} />
                })}
            </div>

            <ModalDelete show={showModalDelete} handleClose={handleCloseModalDelete} taskId={taskId} groupId={groupId} />
            <CreateEditModal show={showModalCreateEdit} handleClose={handleCloseModalCreateEdit} taskId={taskId} />
            <GroupModal show={showModalGroup} handleClose={handleCloseModalGroup} />
        </>
    )
}