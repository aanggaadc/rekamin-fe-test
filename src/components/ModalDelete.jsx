import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './ModalDelete.css'
import { IoWarningOutline, IoCloseSharp } from "react-icons/io5";
import Axios from 'axios'
import { toast } from 'react-toastify'

export default function ModalDelete({ show, handleClose, taskId, groupId }) {
    const deleteTask = () => {
        Axios.delete(`todos/${groupId}/items/${taskId}`)
            .then(() => {
                toast.success('Succesfully delete task')
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <div className='modaldelete-container'>
                <div className='modaldelete-head'>
                    <div className='modaldelete-title'>
                        <IoWarningOutline color='red' size={25} />
                        Delete Task
                    </div>
                    <IoCloseSharp style={{ cursor: "pointer" }} onClick={handleClose} size={25} />
                </div>

                <div className='modaldelete-body'>
                    Are you sure want to delete this task? your action can’t be reverted.
                </div>

                <div className='modaldelete-footer'>
                    <button onClick={handleClose}
                        style={{ color: "#000", background: "#fff" }} >Cancel</button>
                    <button onClick={() => {
                        deleteTask()
                    }} style={{ color: "#fff", background: "#E11428" }} >Delete</button>
                </div>
            </div>
        </Modal>
    )
}