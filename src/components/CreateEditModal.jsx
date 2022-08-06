import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './CreateEditModal.css'
import { IoCloseSharp } from "react-icons/io5";
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'


export default function CreateEditModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <div className='modalcreate-container'>
                <div className='modalcreate-head'>
                    <div className='modalcreate-title'>
                        Create Task
                    </div>
                    <IoCloseSharp style={{ cursor: "pointer" }} onClick={handleClose} size={25} />
                </div>

                <Formik
                    initialValues={{
                        id: "",
                        email: ""
                    }}
                    onSubmit={(values) => {

                    }
                    }
                >
                    {({ handleSubmit, handleChange }) => (
                        <Form>
                            <div className='modalcreate-body'>
                                <label htmlFor="name">Task Name</label>
                                <input className='task-name' type="text" />
                                <label htmlFor="progress">Progress</label>
                                <input className='task-progress' type="text" />

                            </div>

                            <div className='modalcreate-footer'>
                                <button onClick={handleClose}
                                    style={{ color: "#000", background: "#fff", width: "67px" }} >Cancel</button>
                                <button type='submit' style={{ color: "#fff", background: "#01959F", width: "97px" }} >Save Task</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    )
}