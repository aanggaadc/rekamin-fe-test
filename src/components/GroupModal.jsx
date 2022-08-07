import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './GroupModal.css'
import { IoCloseSharp } from "react-icons/io5";
import { Form, Formik } from 'formik'
import Axios from 'axios'
import { toast } from 'react-toastify'


export default function GroupModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <div className='modalgroup-container'>
                <div className='modalgroup-head'>
                    <div className='modalgroup-title'>
                        Create Group Task
                    </div>
                    <IoCloseSharp style={{ cursor: "pointer" }} onClick={handleClose} size={25} />
                </div>

                <Formik
                    initialValues={{
                        title: "",
                        description: ""
                    }}
                    onSubmit={(values) => {
                        Axios.post('todos', values)
                            .then(() => {
                                toast.success("Successfully create group task")
                            }).catch((error) => {
                                console.log(error)
                            })
                    }
                    }
                >
                    {({ handleSubmit, handleChange }) => (
                        <Form>
                            <div className='modalgroup-body'>
                                <label htmlFor="title">Title</label>
                                <input type="text" name='title' onChange={handleChange} />
                                <label htmlFor="description">Description</label>
                                <input type="text" name='description' onChange={handleChange} />

                            </div>

                            <div className='modalgroup-footer'>
                                <button onClick={handleClose}
                                    style={{ color: "#000", background: "#fff", width: "67px" }} >Cancel</button>
                                <button onClick={handleSubmit} type='submit'
                                    style={{ color: "#fff", background: "#01959F", width: "105px" }}>Create Group</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    )
}