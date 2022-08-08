import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './CreateEditModal.css'
import { IoCloseSharp } from "react-icons/io5";
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import Axios from 'axios'


export default function CreateEditModal({ show, handleClose, groupId, taskId }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <div className='modalcreate-container'>
                <div className='modalcreate-head'>
                    <div className='modalcreate-title'>
                        {taskId ? "Edit Task" : "Create Task"}
                    </div>
                    <IoCloseSharp style={{ cursor: "pointer" }} onClick={handleClose} size={25} />
                </div>

                <Formik
                    initialValues={{
                        name: "",
                        progress_percentage: ""
                    }}
                    onSubmit={(values) => {
                        if (taskId) {
                            // API NOT FOUND IN DOCUMENTATION
                            toast.warning("API not found in documentation")
                        } else {
                            Axios.post(`todos/${groupId}/items`, values)
                                .then(() => {
                                    toast.success("Successfully create task")
                                }).catch((error) => {
                                    console.log(error)
                                })
                        }
                        handleClose()
                    }
                    }
                >
                    {({ handleSubmit, handleChange, values }) => (
                        <Form>
                            <div className='modalcreate-body'>
                                <label htmlFor="name">Task Name</label>
                                <input name='name' className='task-name' type="text"
                                    onChange={handleChange} />
                                <label htmlFor="progress">Progress</label>
                                <input name='progress_percentage' className='task-progress' type="number"
                                    onChange={handleChange} />

                            </div>

                            <div className='modalcreate-footer'>
                                <button onClick={handleClose}
                                    type="button" style={{ color: "#000", background: "#fff", width: "67px" }} >Cancel</button>
                                <button onClick={handleSubmit}
                                    type='submit' style={{ color: "#fff", background: "#01959F", width: "97px" }} >Save Task</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    )
}