import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import './CreateEditModal.css'
import { IoCloseSharp } from "react-icons/io5";
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import Axios from 'axios'


export default function CreateEditModal({ show, handleClose, groupId, taskId }) {
    const [initialValues, setInitialValues] = useState({
        name: "",
        progress_percentage: "",
    })

    useEffect(() => {
        const getTaskDetail = () => {
            Axios.get(`todos/${groupId}/items/${taskId}`)
                .then((response) => {
                    setInitialValues(() => {
                        return {
                            name: response.data.name,
                            progress_percentage: response.data.progress_percentage
                        }
                    })
                }).catch((error) => {
                    console.log(error)
                })
        }

        if (groupId && taskId) {
            getTaskDetail()
        }
    }, [groupId, taskId])

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" >
            <div className='modalcreate-container'>
                <div className='modalcreate-head'>
                    <div className='modalcreate-title'>
                        {taskId ? "Edit Task" : "Create Task"}
                    </div>
                    <IoCloseSharp style={{ cursor: "pointer" }} onClick={() => {
                        setInitialValues({
                            name: "",
                            progress_percentage: "",
                        })
                        handleClose()
                    }} size={25} />
                </div>

                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                        if (taskId) {
                            // API NOT FOUND IN DOCUMENTATION
                            setInitialValues({
                                name: "",
                                progress_percentage: "",
                            })
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
                                    onChange={handleChange} value={values.name} />
                                <label htmlFor="progress">Progress</label>
                                <input name='progress_percentage' className='task-progress' type="number"
                                    onChange={handleChange} value={values.progress_percentage} />

                            </div>

                            <div className='modalcreate-footer'>
                                <button onClick={() => {
                                    setInitialValues({
                                        name: "",
                                        progress_percentage: "",
                                    })
                                    handleClose()
                                }}
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